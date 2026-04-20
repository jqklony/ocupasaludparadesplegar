# TODO: Migración Quirúrgica Monolito → Refactorizado [PROGRESO: Pasos 1-3 ✓]

## Plan Detallado Línea por Línea

### Paso 1: [✓] TODO.md creado

### Paso 2: [✓] utils/security.js CREADO (port monolito App.jsx líneas 1-500)
```
_auditLog(action, user, detail): localStorage 200 logs max ✓
_pbkdf2Hash(password, salt): 100k iter crypto.subtle ✓
_safeLogoUrl(url): XSS block javascript: ✓
_sanitizeInput(str): < > XSS ✓
```
**Depend**: App.jsx import [Pendiente Paso 7]

### Paso 3: [✓] utils/aiProviders.js + parseAIJSON (monolito líneas 5000+ CONFIRMADO)
```
escapeCtrl(s): fix \\n in JSON strings ✓
fix commas/arrays: repaired.replace(/,\\s*([}\\]])/g, '$1') ✓
```
**Test**: HistoriaPage IA buttons [Pendiente Paso 6]

### Paso 4: [ ] panels/RestriccionesChecklistPanel: GATISO categories monolito
**Agregar**: columnaLumbar/miembroSuperior (7+ items únicos monolito)
**Depend**: src/data/catalogos.js RESTRICCIONES_CATALOG expand

### Paso 5: [✓] utils/hashHelpers.js CREADO (port monolito Historia.jsx):
```
generarHashHC(data): SHA-256 contenido HC ✓
generarCodigoQR(id, hash): SISO-YYYYMMDD-ID-HASH16 ✓
formatFirmaDigital(): display QR/hash ✓
testHashHelpers(): autotest funcional ✓
```
**Integrar**: Historia.jsx/App.jsx import + replace inline [Paso 8]

### Paso 6: Test
cd ocupasalud-paradesplegar && npm run dev

### Paso 7: [ ] App.jsx imports + replace inline calls

**Próximo**: Paso 4 Restricciones GATISO → Confirma.

