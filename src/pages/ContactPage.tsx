import React, { useState } from 'react';
import {
  AlertCircle,
  Building,
  CheckCircle2,
  Clock,
  HelpCircle,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Shield
} from 'lucide-react';
import { PageId } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Result / Marksheet Inquiry');
  const [message, setMessage] = useState('');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ticketId = 'CISCE-CARE-' + Math.floor(100000 + Math.random() * 900000);
    setSubmittedTicket(ticketId);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Support &amp; Grievances</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Contact CISCE &amp; Helpdesk
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Get in touch with the Council’s Head Office in Pushp Vihar, Registered Office in Nehru Place, or reach out to your regional technical helpdesk cluster.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-12">
        {/* Offices Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Head Office */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b2545] flex items-center justify-center">
                <Building className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#0b2545] text-base">Council Head Office</h3>
                <p className="text-xs text-slate-500">Examinations &amp; Affiliation Wing</p>
              </div>
            </div>

            <div className="text-xs space-y-2.5 text-slate-700">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Plot No. 35-36, Sector VI, Pushp Vihar, Saket, New Delhi - 110017</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>EPABX: (011) 29564831, 29564833, 29564837</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>council@cisce.org | helpdesk@cisce.org</span>
              </p>
              <p className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Office Hours: Monday to Friday (9:00 AM - 5:30 PM)</span>
              </p>
            </div>
          </div>

          {/* Registered Office */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0b2545] flex items-center justify-center">
                <Building className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <h3 className="font-bold text-[#0b2545] text-base">Registered Office</h3>
                <p className="text-xs text-slate-500">Corporate &amp; Legal Administration</p>
              </div>
            </div>

            <div className="text-xs space-y-2.5 text-slate-700">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Pragati House, 3rd Floor, 47-48, Nehru Place, New Delhi - 110019</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Tel: (011) 26413820, 26411706, 26413824</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-bold text-amber-700">Toll Free Helpline: 1800-203-2414</span>
              </p>
              <p className="flex items-center gap-2 text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Office Hours: Monday to Friday (9:00 AM - 5:30 PM)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Regional Helpdesk Clusters */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <h3 className="text-base font-bold text-[#0b2545] uppercase tracking-wide">
            Regional Technical Helpdesk Clusters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#0b2545] block">North Cluster</span>
              <p className="text-slate-500">Delhi, UP, Punjab, Haryana, Uttarakhand, J&amp;K, HP</p>
              <p className="text-blue-900 font-semibold pt-1">ciscehelpdesk.north@cisce.org</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#0b2545] block">East Cluster</span>
              <p className="text-slate-500">West Bengal, Bihar, Jharkhand, Odisha, NE States</p>
              <p className="text-blue-900 font-semibold pt-1">ciscehelpdesk.east@cisce.org</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#0b2545] block">West Cluster</span>
              <p className="text-slate-500">Maharashtra, Gujarat, Rajasthan, MP, Goa</p>
              <p className="text-blue-900 font-semibold pt-1">ciscehelpdesk.west@cisce.org</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#0b2545] block">South &amp; Overseas</span>
              <p className="text-slate-500">Karnataka, Tamil Nadu, Kerala, AP, Telangana &amp; Foreign</p>
              <p className="text-blue-900 font-semibold pt-1">ciscehelpdesk.south@cisce.org</p>
            </div>
          </div>
        </div>

        {/* Inquiry & Grievance Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <h3 className="text-lg font-bold text-[#0b2545] font-serif uppercase tracking-wide">
              Online Grievance &amp; Public Inquiry Form
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Submit your inquiry directly to the Council Helpdesk. A unique tracking ticket will be generated.
            </p>
          </div>

          {submittedTicket ? (
            <div className="p-6 bg-emerald-50 border-2 border-emerald-400 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h4 className="font-bold text-sm">Inquiry Ticket Registered</h4>
              </div>
              <p className="text-xs text-emerald-900">
                Thank you for contacting CISCE. Your grievance/inquiry has been received and assigned ticket number:
              </p>
              <p className="text-base font-black font-mono text-[#0b2545] bg-white p-3 rounded border border-emerald-300 inline-block">
                {submittedTicket}
              </p>
              <p className="text-[11px] text-slate-600">
                The concerned division will respond via email to <strong>{email}</strong> within 2 business days.
              </p>
              <button
                onClick={() => setSubmittedTicket(null)}
                className="text-xs font-bold text-[#0b2545] hover:underline block pt-2"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Your Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Candidate / Parent Name"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="user@example.com"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1 uppercase">Contact Mobile</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">Inquiry Subject / Topic</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                >
                  <option value="Result / Marksheet Inquiry">Result / Marksheet Inquiry</option>
                  <option value="Duplicate Certificate Request">Duplicate Certificate Request</option>
                  <option value="Migration Certificate">Migration Certificate</option>
                  <option value="Correction in Name or D.O.B">Correction in Name or D.O.B</option>
                  <option value="School Affiliation Query">School Affiliation Query</option>
                  <option value="General Academic Question">General Academic Question</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1 uppercase">Message / Grievance Description</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide complete details including Candidate UID, School Name, and specific question..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded font-semibold focus:border-[#0b2545] focus:outline-hidden"
                  required
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs px-6 py-2.5 rounded uppercase tracking-wider transition-colors shadow-xs flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Submit Inquiry Ticket</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
