import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = '/api';

  // Helper: fetch and return full profile data
  const fetchFullProfile = async (token) => {
    try {
      const res = await fetch(`${API_URL}/auth/profile`, {
        headers: { 'Authorization': `Bearer ${token}` },
        credentials: 'include'
      });
      const data = await res.json();
      return data.success ? data.user : null;
    } catch {
      return null;
    }
  };

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const fullUser = await fetchFullProfile(token);
        if (fullUser) {
          setUser(fullUser);
        } else {
          localStorage.removeItem('token');
          setUser(null);
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
        // Do not remove token on temporary network errors
      } finally {
        setLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  const login = async (email, password) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        // Re-fetch full profile to get all saved fields
        const fullUser = await fetchFullProfile(data.token);
        setUser(fullUser || data.user);
        setLoading(false);
        return fullUser || data.user;
      } else {
        setError(data.message || 'Login failed');
        setLoading(false);
        throw new Error(data.message || 'Login failed');
      }
    } catch (err) {
      setError(err.message || 'Network error');
      setLoading(false);
      throw err;
    }
  };

  const register = async (userData) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(userData)
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        // Re-fetch full profile to get all saved fields
        const fullUser = await fetchFullProfile(data.token);
        setUser(fullUser || data.user);
        setLoading(false);
        return fullUser || data.user;
      } else {
        setError(data.message || 'Registration failed');
        setLoading(false);
        throw new Error(data.message || 'Registration failed');
      }
    } catch (err) {
      setError(err.message || 'Network error');
      setLoading(false);
      throw err;
    }
  };

  const updateProfile = async (profileData) => {
    setError(null);
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Not authenticated');

    try {
      const res = await fetch(`${API_URL}/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        body: JSON.stringify(profileData)
      });

      const data = await res.json();

      if (data.success) {
        // Re-fetch full profile to get all fields
        const fullUser = await fetchFullProfile(token);
        setUser(fullUser || data.user);
        return data.user;
      } else {
        setError(data.message || 'Update failed');
        throw new Error(data.message || 'Update failed');
      }
    } catch (err) {
      setError(err.message || 'Network error');
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const loginWithGoogle = async (credentialResponse) => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/auth/google`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ credential: credentialResponse.credential })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        // Re-fetch full profile to get all saved fields (profilePhoto, mobile, placementGoals, etc.)
        const fullUser = await fetchFullProfile(data.token);
        setUser(fullUser || data.user);
        setLoading(false);
        return fullUser || data.user;
      } else {
        setError(data.message || 'Google sign-in failed');
        setLoading(false);
        throw new Error(data.message || 'Google sign-in failed');
      }
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
      setLoading(false);
      throw err;
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    loginWithGoogle,
    logout,
    updateProfile,
    apiUrl: API_URL
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
