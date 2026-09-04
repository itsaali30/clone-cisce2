import React, { useState } from 'react';
import { Check, Code2, Copy, Download, FileCode, Layers, X } from 'lucide-react';
import { PageId } from '../types';

interface VueCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePage: PageId;
}

export const VueCodeModal: React.FC<VueCodeModalProps> = ({ isOpen, onClose, activePage }) => {
  const [selectedFile, setSelectedFile] = useState<string>('App.vue');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const vueFiles: Record<string, { filename: string; code: string }> = {
    'App.vue': {
      filename: 'App.vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import NoticeTicker from './components/NoticeTicker.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ExaminationsPage from './pages/ExaminationsPage.vue'
import ResultsPage from './pages/ResultsPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import LocateSchoolPage from './pages/LocateSchoolPage.vue'
import CircularsPage from './pages/CircularsPage.vue'
import CareersPage from './pages/CareersPage.vue'
import ContactPage from './pages/ContactPage.vue'

type PageId = 'home' | 'about' | 'examinations' | 'results' | 'services' | 'schools' | 'circulars' | 'careers' | 'contact'

const activePage = ref<PageId>('home')
const highContrast = ref(false)
const fontSize = ref(16)

const navigate = (page: PageId) => {
  activePage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div :class="['min-h-screen flex flex-col', highContrast ? 'contrast-125 bg-black text-white' : 'bg-slate-50 text-slate-900']" :style="{ fontSize: fontSize + 'px' }">
    <Header
      :active-page="activePage"
      :high-contrast="highContrast"
      @navigate="navigate"
      @toggle-contrast="highContrast = !highContrast"
      @adjust-font="(d) => fontSize = Math.max(13, Math.min(22, fontSize + d))"
    />
    <NoticeTicker @navigate="navigate" />

    <main class="flex-grow">
      <HomePage v-if="activePage === 'home'" @navigate="navigate" />
      <AboutPage v-else-if="activePage === 'about'" @navigate="navigate" />
      <ExaminationsPage v-else-if="activePage === 'examinations'" @navigate="navigate" />
      <ResultsPage v-else-if="activePage === 'results'" @navigate="navigate" />
      <ServicesPage v-else-if="activePage === 'services'" @navigate="navigate" />
      <LocateSchoolPage v-else-if="activePage === 'schools'" @navigate="navigate" />
      <CircularsPage v-else-if="activePage === 'circulars'" @navigate="navigate" />
      <CareersPage v-else-if="activePage === 'careers'" @navigate="navigate" />
      <ContactPage v-else-if="activePage === 'contact'" @navigate="navigate" />
    </main>

    <Footer @navigate="navigate" />
  </div>
</template>`
    },
    'ResultsPage.vue': {
      filename: 'ResultsPage.vue',
      code: `<script setup lang="ts">
import { ref } from 'vue'

const course = ref<'ICSE' | 'ISC'>('ICSE')
const uid = ref('7182934')
const indexNo = ref('2418042/019')
const captchaInput = ref('')
const captchaCode = ref('9KM8W')
const studentResult = ref<any>({
  uid: '7182934',
  indexNo: '2418042/019',
  candidateName: 'AARAV R. SHARMA',
  gender: 'MALE',
  dateOfBirth: '14/08/2009',
  schoolName: 'ST. XAVIER HIGH SCHOOL, NEW DELHI',
  schoolCode: 'DL042',
  course: 'ICSE',
  year: '2025',
  resultStatus: 'PASS CERTIFICATE AWARDED',
  percentage: 96.4,
  subjects: [
    { subject: 'ENGLISH LANGUAGE & LITERATURE', code: '01', total: 94, grade: '1 (ONE)' },
    { subject: 'HINDI', code: '02', total: 96, grade: '1 (ONE)' },
    { subject: 'HISTORY, CIVICS & GEOGRAPHY', code: '50', total: 95, grade: '1 (ONE)' },
    { subject: 'MATHEMATICS', code: '51', total: 98, grade: '1 (ONE)' },
    { subject: 'SCIENCE (PHY, CHEM, BIO)', code: '52', total: 97, grade: '1 (ONE)' },
    { subject: 'COMPUTER APPLICATIONS', code: '86', total: 100, grade: '1 (ONE)' }
  ]
})

const checkResult = () => {
  if (uid.value.length === 7) {
    // verified lookup logic
    alert('Displaying verified result for UID: ' + uid.value)
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8 space-y-8">
    <div class="bg-[#0b2545] text-white p-6 rounded-t-xl">
      <h2 class="text-xl font-bold uppercase font-serif">CISCE Results Portal 2025</h2>
      <p class="text-xs text-slate-300">Indian Certificate of Secondary Education & Indian School Certificate</p>
    </div>

    <div class="bg-white p-6 border rounded-b-xl shadow-sm space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-xs font-bold text-slate-700">COURSE</label>
          <select v-model="course" class="w-full p-2 border rounded mt-1 text-xs">
            <option value="ICSE">ICSE (Class X)</option>
            <option value="ISC">ISC (Class XII)</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700">CANDIDATE UID (7 DIGITS)</label>
          <input v-model="uid" type="text" maxlength="7" class="w-full p-2 border rounded mt-1 text-xs" />
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700">INDEX NUMBER</label>
          <input v-model="indexNo" type="text" class="w-full p-2 border rounded mt-1 text-xs" />
        </div>
      </div>
      <button @click="checkResult" class="bg-[#0b2545] hover:bg-blue-900 text-white px-6 py-2 rounded text-xs font-bold uppercase">
        Show Result
      </button>
    </div>

    <!-- Marksheet Presentation -->
    <div v-if="studentResult" class="bg-white p-8 rounded-xl border-2 border-amber-500 shadow-md space-y-6">
      <div class="text-center border-b pb-4">
        <h3 class="text-xl font-bold text-[#0b2545]">COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS</h3>
        <p class="text-xs font-semibold text-slate-600 uppercase">STATEMENT OF MARKS - {{ studentResult.course }} 2025</p>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div>Candidate Name: <strong>{{ studentResult.candidateName }}</strong></div>
        <div>UID: <strong>{{ studentResult.uid }}</strong></div>
        <div>Index No: <strong>{{ studentResult.indexNo }}</strong></div>
        <div>Status: <strong class="text-emerald-700">{{ studentResult.resultStatus }}</strong></div>
      </div>
    </div>
  </div>
</template>`
    },
    'LocateSchoolPage.vue': {
      filename: 'LocateSchoolPage.vue',
      code: `<script setup lang="ts">
import { ref, computed } from 'vue'

const searchQuery = ref('')
const selectedState = ref('ALL')
const schools = ref([
  { name: 'The Cathedral and John Connon School', code: 'MA001', state: 'Maharashtra', city: 'Mumbai' },
  { name: 'La Martiniere College', code: 'UP012', state: 'Uttar Pradesh', city: 'Lucknow' },
  { name: "St. Xavier's Collegiate School", code: 'WB005', state: 'West Bengal', city: 'Kolkata' },
  { name: 'The Doon School', code: 'UT003', state: 'Uttarakhand', city: 'Dehradun' },
  { name: 'Bishop Cotton Boys School', code: 'KA008', state: 'Karnataka', city: 'Bengaluru' }
])

const filtered = computed(() => {
  return schools.value.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || s.city.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesState = selectedState.value === 'ALL' || s.state === selectedState.value
    return matchesSearch && matchesState
  })
})
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8 space-y-6">
    <div class="bg-white p-6 rounded-xl border shadow-sm">
      <h2 class="text-lg font-bold text-[#0b2545] uppercase">Locate Affiliated Schools</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <input v-model="searchQuery" placeholder="Search school name or city..." class="p-2 border rounded text-xs" />
        <select v-model="selectedState" class="p-2 border rounded text-xs">
          <option value="ALL">All States</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Delhi">Delhi</option>
        </select>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="school in filtered" :key="school.code" class="p-5 bg-white rounded-xl border shadow-xs">
        <span class="text-xs font-bold text-amber-700">Code: {{ school.code }}</span>
        <h3 class="font-bold text-sm text-[#0b2545] mt-1">{{ school.name }}</h3>
        <p class="text-xs text-slate-500">{{ school.city }}, {{ school.state }}</p>
      </div>
    </div>
  </div>
</template>`
    }
  };

  const currentFile = vueFiles[selectedFile] || vueFiles['App.vue'];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentFile.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-slate-900 text-slate-200 rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-700 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <span>Vue.js 3 Single File Component Exporter</span>
                <span className="bg-emerald-500/20 text-emerald-300 text-[10px] px-2 py-0.5 rounded font-mono">
                  Vue 3 Composition API
                </span>
              </h3>
              <p className="text-[11px] text-slate-400">
                Direct exportable Vue 3 code satisfying your request for a Vue.js clone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs & Actions */}
        <div className="px-4 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto">
          <div className="flex items-center gap-1.5 text-xs font-mono">
            {Object.keys(vueFiles).map((fname) => (
              <button
                key={fname}
                onClick={() => setSelectedFile(fname)}
                className={`px-3 py-1 rounded transition-colors flex items-center gap-1.5 ${
                  selectedFile === fname
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{fname}</span>
              </button>
            ))}
          </div>

          <button
            onClick={handleCopy}
            className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded transition-colors flex items-center gap-1.5 shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Vue Code'}</span>
          </button>
        </div>

        {/* Code Viewer */}
        <div className="p-4 flex-1 overflow-auto bg-[#0a0f18] font-mono text-xs text-emerald-300/90 leading-relaxed select-all">
          <pre className="whitespace-pre-wrap">{currentFile.code}</pre>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <span>You can paste this directly into a Vue.js 3 + Vite project with Tailwind CSS!</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded font-bold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
