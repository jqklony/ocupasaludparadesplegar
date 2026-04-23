# TODO - Ampliación Encuestas Sociodemográficas Portal Empresas

## ✅ PLAN APROBADO (Usuario: 2024-12-XX)

**Objetivo:** Tab "Informes" PortalCertificadosEmpresa → Tabla socio (22 campos) + Actions (View/Import/PDF/Schedule)

## PASOS [0/5]

- [ ] **1. Backend data.js** - Endpoint `/api/empresa-encuestas-socio/:empresaId`
  * JOIN reports + patients.historias WHERE empresaId
  * Retorna socio:{nombres,docTipo,fechaNacimiento,género,eps,arl,...}

- [ ] **2. Hook useCompanyDocuments.js** - `encuestasSocio:[] + useEffect fetch`
  * useState encuestasSocio
  * useEffect empresaId → fetch endpoint

- [ ] **3. PortalCertificadosEmpresa.jsx** - Tabla Informes Socio + Actions
  ```
  Nombres | Edad | Género | Cargo | EPS | ARL | Turno | Actions
  ──────────────────────────────────────────────────────────
  Juan P | 32 | M | Op. | SURA | ARL SURA | Diurno | 👁️⬆️📄📅
  ```
  * Campos: 22 socio + View/Import Patients/PDF/Schedule All
  * SIN romper código existente

- [ ] **4. TEST** - `npm run dev`
  * /portal-certificados/:nit/informes → Tab Socio ✓
  * Actions funcionales (agendar como ahora + datos nuevos)

- [ ] **5. SYNC siso-appultimo**
  * Copiar portalEmpresa/ → siso-appultimo/src/modules/portalEmpresa/

## DEPENDENCIAS
```
ocupasalud-paradesplegar/
├── backend/src/routes/data.js
├── src/hooks/useCompanyDocuments.js  
└── src/pages/PortalCertificadosEmpresa.jsx
```

## CRITERIOS ÉXITO
- ✅ Tabla carga datos socio por empresaId
- ✅ Actions: View (detalle), Import (pacientes), PDF (export), Schedule (agenda masiva)
- ✅ NO rompe funciones existentes (certificados/custodia)
- ✅ npm run dev sin errores

---
*Protocolo BLACKBOXAI v4.2 - Res. 1843/2025 Colombia*
