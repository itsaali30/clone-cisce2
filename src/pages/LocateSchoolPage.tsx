import React, { useState } from 'react';
import {
  Award,
  Building2,
  CheckCircle,
  Filter,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Search,
  Shield,
  X
} from 'lucide-react';
import { CISCE_SCHOOLS } from '../data/cisceData';
import { PageId, School } from '../types';

interface LocateSchoolPageProps {
  onNavigate: (page: PageId) => void;
}

export const LocateSchoolPage: React.FC<LocateSchoolPageProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState('ALL');
  const [selectedType, setSelectedType] = useState('ALL');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedSchoolModal, setSelectedSchoolModal] = useState<School | null>(null);

  const states = ['ALL', 'Delhi', 'Maharashtra', 'West Bengal', 'Uttar Pradesh', 'Uttarakhand', 'Karnataka', 'Tamil Nadu'];

  const filteredSchools = CISCE_SCHOOLS.filter((school) => {
    const matchSearch =
      school.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      school.code.toLowerCase().includes(searchTerm.toLowerCase());
    const matchState = selectedState === 'ALL' || school.state === selectedState;
    const matchType = selectedType === 'ALL' || school.type === selectedType;
    const matchCategory = selectedCategory === 'ALL' || school.category === selectedCategory;

    return matchSearch && matchState && matchType && matchCategory;
  });

  return (
    <div className="w-full bg-slate-50 min-h-screen py-8">
      {/* Banner */}
      <div className="bg-[#0b2545] text-white py-12 px-4 md:px-8 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex items-center gap-2 text-amber-400 text-xs uppercase font-bold tracking-wider">
            <Building2 className="w-4 h-4" />
            <span>Institutional Directory</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif tracking-tight">
            Locate Affiliated Schools
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-3xl leading-relaxed">
            Search and verify official accreditation of more than 2,800 schools across India and international centres affiliated with CISCE.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search by school name, city, or affiliation code (e.g. WB005, Cathedral, Doon)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full text-xs sm:text-sm pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:border-[#0b2545] focus:outline-hidden font-medium"
              />
            </div>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-500 hover:text-slate-800"
              >
                Clear Search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 border-t border-slate-100 text-xs font-medium">
            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Filter by State</label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded focus:border-[#0b2545] focus:outline-hidden"
              >
                {states.map((st) => (
                  <option key={st} value={st}>
                    {st === 'ALL' ? 'All States & Union Territories' : st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">School Gender Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded focus:border-[#0b2545] focus:outline-hidden"
              >
                <option value="ALL">All Types (Co-Ed, Boys, Girls)</option>
                <option value="Co-Ed">Co-Educational</option>
                <option value="Boys">Boys School</option>
                <option value="Girls">Girls School</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-500 mb-1 font-semibold">Institution Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded focus:border-[#0b2545] focus:outline-hidden"
              >
                <option value="ALL">All Categories</option>
                <option value="Day School">Day School</option>
                <option value="Boarding School">Boarding School</option>
                <option value="Day & Boarding">Day &amp; Boarding School</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-600">
          <p>
            Showing <strong>{filteredSchools.length}</strong> affiliated institutions matching criteria.
          </p>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <CheckCircle className="w-3.5 h-3.5" /> All Verified CISCE Affiliated
          </span>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      Code: {school.code}
                    </span>
                    <h3 className="font-bold text-[#0b2545] text-base mt-1.5">{school.name}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0b2545] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 text-amber-500" />
                  </div>
                </div>

                <div className="text-xs space-y-1.5 text-slate-600">
                  <p className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{school.address}, {school.city}, {school.state} - {school.pincode}</span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>Affiliation Levels: <strong>{school.levels.join(', ')}</strong></span>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    <span>{school.phone}</span>
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                    {school.type}
                  </span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium">
                    {school.category}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedSchoolModal(school)}
                  className="text-xs font-bold text-[#0b2545] hover:text-blue-700 uppercase tracking-wider"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* School Details Modal */}
        {selectedSchoolModal && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95">
              <button
                onClick={() => setSelectedSchoolModal(null)}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Affiliation Code: {selectedSchoolModal.code}
                </span>
                <h3 className="text-lg font-bold text-[#0b2545] font-serif mt-2">
                  {selectedSchoolModal.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Affiliated to CISCE since {selectedSchoolModal.affiliationYear}
                </p>
              </div>

              <div className="text-xs space-y-3 text-slate-700">
                <div>
                  <span className="text-slate-400 block font-medium">Head of Institution / Principal:</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedSchoolModal.principal}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Postal Address:</span>
                  <span className="font-semibold text-slate-800">{selectedSchoolModal.address}, {selectedSchoolModal.city}, {selectedSchoolModal.state} - {selectedSchoolModal.pincode}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Contact Numbers:</span>
                  <span className="font-semibold text-slate-800">{selectedSchoolModal.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Official Email:</span>
                  <span className="font-semibold text-slate-800">{selectedSchoolModal.email}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Accreditation Levels:</span>
                  <div className="flex gap-2 mt-1">
                    {selectedSchoolModal.levels.map((lvl, i) => (
                      <span key={i} className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded font-bold">
                        {lvl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center gap-2 text-emerald-800 text-xs">
                <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Permanent Affiliation Status verified in CISCE National Registry.</span>
              </div>

              <button
                onClick={() => setSelectedSchoolModal(null)}
                className="w-full bg-[#0b2545] hover:bg-blue-900 text-white font-bold text-xs py-2.5 rounded uppercase tracking-wider transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
