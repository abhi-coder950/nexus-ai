import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { GoogleLogin } from '@react-oauth/google';
import { GraduationCap, ArrowRight, ArrowLeft, Loader2, AlertCircle } from 'lucide-react';

const Register = () => {
  const { register, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [course, setCourse] = useState('BCA');
  const [branch, setBranch] = useState('');
  const [cgpa, setCgpa] = useState('');
  const [graduationYear, setGraduationYear] = useState('2026');
  const [skillsText, setSkillsText] = useState('');

  const nextStep = () => {
    setFormError('');
    if (step === 1) {
      if (!name || !email || !password || !confirmPassword) {
        setFormError('Please fill in all personal details.');
        return;
      }
      if (password !== confirmPassword) {
        setFormError('Passwords do not match.');
        return;
      }
      if (password.length < 6) {
        setFormError('Password must be at least 6 characters.');
        return;
      }
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (step === 2) {
      if (!branch || !cgpa) {
        setFormError('Please enter your branch and CGPA.');
        return;
      }
      const parsedCgpa = parseFloat(cgpa);
      if (isNaN(parsedCgpa) || parsedCgpa < 0 || parsedCgpa > 10) {
        setFormError('Please enter a valid CGPA between 0.0 and 10.0.');
        return;
      }
    }

    setIsLoading(true);
    
    // Parse skills list
    const skills = skillsText
      ? skillsText.split(',').map(s => s.trim().toUpperCase()).filter(s => s.length > 0)
      : [];

    const userData = {
      name,
      email,
      password,
      course,
      branch,
      cgpa: parseFloat(cgpa),
      graduationYear: parseInt(graduationYear),
      skills
    };

    try {
      await register(userData);
      navigate('/dashboard');
    } catch (err) {
      setFormError(err.message || 'Registration failed. Please check your details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex items-center justify-center p-6">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="w-full max-w-lg glass-card p-8 rounded-3xl relative overflow-hidden shadow-2xl border border-white/5">
        
        {/* Brand Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <GraduationCap className="h-7 w-7 text-indigo-500" />
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">PrepNex</span>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Create Account</h1>
            <p className="text-xs text-slate-400 mt-1">
              {step === 1 ? 'Step 1: Personal Credentials' : 'Step 2: Academic Profile & Skills'}
            </p>
          </div>
          <div className="flex gap-1.5">
            <span className={`w-6 h-1.5 rounded-full transition-all duration-300 ${step === 1 ? 'bg-indigo-500 w-8' : 'bg-slate-700'}`}></span>
            <span className={`w-6 h-1.5 rounded-full transition-all duration-300 ${step === 2 ? 'bg-indigo-500 w-8' : 'bg-slate-700'}`}></span>
          </div>
        </div>

        {formError && (
          <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/20 text-red-400 p-3.5 rounded-xl text-xs mb-6">
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{formError}</span>
          </div>
        )}

        {/* Google Sign-In (always visible) */}
        {step === 1 && (
          <>
            <div className="relative flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-medium">or sign up with</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>
            <div className="flex justify-center mb-6">
              <GoogleLogin
                onSuccess={async (credentialResponse) => {
                  setFormError('');
                  setIsLoading(true);
                  try {
                    await loginWithGoogle(credentialResponse);
                    navigate('/dashboard');
                  } catch (err) {
                    setFormError(err.message || 'Google sign-up failed. Please try again.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                onError={() => {
                  setFormError('Google sign-up was unsuccessful. Please try again.');
                }}
                theme="outline"
                shape="rectangular"
                size="large"
                width="320"
                text="signup_with"
              />
            </div>
          </>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* STEP 1: Personal Credentials */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Aarav Sharma"
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="aarav@placement.com"
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    required
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Confirm Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    required
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={nextStep}
                className="w-full btn-gradient py-3 mt-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
              >
                Continue to Academic Details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          )}

          {/* STEP 2: Academic Profile & Skills */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Course / Degree</label>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                  >
                    <option value="BCA" className="bg-slate-900 text-slate-100">BCA</option>
                    <option value="B.Tech" className="bg-slate-900 text-slate-100">B.Tech</option>
                    <option value="MCA" className="bg-slate-900 text-slate-100">MCA</option>
                    <option value="B.Sc" className="bg-slate-900 text-slate-100">B.Sc</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Graduation Year</label>
                  <select
                    value={graduationYear}
                    onChange={(e) => setGraduationYear(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                  >
                    <option value="2025" className="bg-slate-900 text-slate-100">2025</option>
                    <option value="2026" className="bg-slate-900 text-slate-100">2026</option>
                    <option value="2027" className="bg-slate-900 text-slate-100">2027</option>
                    <option value="2028" className="bg-slate-900 text-slate-100">2028</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Branch / Specialization</label>
                  <input
                    type="text"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder="Information Technology"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Current CGPA</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={cgpa}
                    onChange={(e) => setCgpa(e.target.value)}
                    placeholder="8.50"
                    className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Technical Skills (comma-separated)</label>
                <input
                  type="text"
                  value={skillsText}
                  onChange={(e) => setSkillsText(e.target.value)}
                  placeholder="React, Java, Node.js, Python, SQL"
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="flex-1 bg-slate-900/60 hover:bg-slate-800/60 border border-white/10 py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 btn-gradient py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Register Account'
                  )}
                </button>
              </div>
            </div>
          )}

          <div className="text-center text-xs text-slate-500 pt-4 border-t border-white/5">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-400 hover:underline">
              Sign In here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
