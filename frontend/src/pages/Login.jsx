import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { GraduationCap, Eye, EyeOff, Lock, Mail, Loader2, AlertCircle } from 'lucide-react';

const Login = () => {
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    // Input Validation
    if (!email || !password) {
      setFormError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    try {
      const user = await login(email, password);
      if (user.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/dashboard');
      }
    } catch (err) {
      setFormError(err.message || 'Invalid credentials. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col md:flex-row">
      {/* Visual / Branding Sidebar */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-950 via-[#0C0F1A] to-[#070A13] relative overflow-hidden items-center justify-center p-12 border-r border-white/5">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-md text-left z-10 space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="h-10 w-10 text-indigo-500" />
            <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300 tracking-tight">PrepNex</span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white">
            Crack Aptitude, Coding & Interviews Smarter.
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Master aptitude, code in a live sandbox, get AI-powered resume feedback, and track your placement readiness — all in one workspace.
          </p>
          <div className="pt-4 flex gap-4 text-xs text-slate-500 font-semibold uppercase tracking-wider">
            <span>Aptitude Arena</span>
            <span>•</span>
            <span>Coding Sandbox</span>
            <span>•</span>
            <span>AI Resume Check</span>
          </div>
        </div>
      </div>

      {/* Login Card Panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative">
        <div className="absolute top-10 left-10 lg:hidden flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-indigo-500" />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">PrepNex</span>
        </div>

        <div className="w-full max-w-md space-y-8 glass-card p-8 rounded-3xl shadow-xl border border-white/5">
          <div className="text-left">
            <h1 className="text-2xl font-bold text-white tracking-tight">Sign In</h1>
            <p className="text-xs text-slate-400 mt-1.5">Welcome back! Please enter your details below.</p>
          </div>

          {formError && (
            <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl text-xs">
              <AlertCircle className="h-4 w-4 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-300">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@placement.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="text-xs font-semibold text-slate-300">Password</label>
                <Link to="/forgot-password" className="text-[10px] text-indigo-400 hover:underline">
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4.5 w-4.5 text-slate-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl glass-input text-sm"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-white/10 bg-slate-950 text-indigo-600 focus:ring-indigo-500/20"
              />
              <label htmlFor="remember" className="ml-2 text-xs text-slate-400 select-none cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-gradient py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing In...
                </>
              ) : (
                'Sign In to PrepNex'
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">or continue with</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Google Sign-In */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={async (credentialResponse) => {
                setFormError('');
                setIsLoading(true);
                try {
                  const user = await loginWithGoogle(credentialResponse);
                  if (user.role === 'admin') {
                    navigate('/admin');
                  } else {
                    navigate('/dashboard');
                  }
                } catch (err) {
                  setFormError(err.message || 'Google sign-in failed. Please try again.');
                } finally {
                  setIsLoading(false);
                }
              }}
              onError={() => {
                setFormError('Google sign-in was unsuccessful. Please try again.');
              }}
              theme="outline"
              shape="rectangular"
              size="large"
              width="320"
              text="signin_with"
            />
          </div>

          {/* Seed accounts notification panel */}
          <div className="bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-4 text-[10px] text-slate-400 leading-relaxed text-left">
            <p className="font-semibold text-indigo-300 mb-1">Demo Credentials:</p>
            <p>🎓 **Student:** `student@placement.com` / `student123`</p>
            <p>🛡️ **Admin:** `admin@placement.com` / `admin123`</p>
          </div>

          <div className="text-center text-xs text-slate-500">
            Don't have an account?{' '}
            <Link to="/register" className="text-indigo-400 hover:underline">
              Create student account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
