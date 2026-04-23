# PROTOCOLO ENCUESTAS EMPRESAS + SOCIODEMOGRÁFICOS

## 1. ANÁLISIS (✓)
- PortalCertificadosEmpresa.jsx: tab Informes → localStorage 'siso_saved_reports'
- HistoriaPage.jsx: sociodemog 25 campos → save Supabase patients/historias
- Missing: JOIN empresaId → reports + paciente socio

## 2. PLAN
**Backend data.js:**
```
app.get('/api/empresa-encuestas-socio/:empresaId', async (req, res) => {
  const { supabase } = req;
  const { data: reports } = await supabase.from('reports').select('*').eq('empresaId', req.params.empresaId);
  const { data: pacientes } = await supabase.from('patients').select('*, historias(*)').eq('empresaId', req.params.empresaId);
  res.json(reports.map(r => ({...r, socio: pacientes.find(p => p.id === r.pacienteId)?.historias })));
});
```

**Hook useCompanyDocuments.js:**
```
const [encuestasSocio, setEncuestasSocio] = useState([]);
useEffect(() => {
  if (empresaId) {
    fetch(`/api/empresa-encuestas-socio/${empresaId}`).then(r => r.json()).then(setEncuestasSocio);
  }
}, [empresaId]);
```

**Component:**
Table Informes: cols Nombres, Edad, Género, Cargo, EPS, ARL + actions 👁️/⬆️/📄/📅

## 3. DEPENDENTS
data.js, useCompanyDocuments.js, PortalCertificadosEmpresa.jsx

## 4. TEST
npm run dev → /portal-certificados/:nit/informes → socio ✓

**✅ APROBAR PLAN?**

