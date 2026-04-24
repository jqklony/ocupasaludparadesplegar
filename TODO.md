# 🚀 TODO - Modo Agenda Encuesta (Protocolo Aprobado)

## 📋 Progreso Actual
- [x] Servidor dev corriendo: http://localhost:5175/
- [ ] Verificar estado actual agenda/encuestas

## 🔧 Pasos de Implementación (Secuencial)

### **Paso 1: utils/supabase.js** - Función marcarAgendaVisto()
```
[ ] Añadir export async function marcarAgendaVisto(agendaId)
[ ] Test: console.log(await marcarAgendaVisto(testId))
```

### **Paso 2: src/pages/Historia.jsx** - Implementar componente completo
```
[ ] Convertir stub → recibe agendaPatientId
[ ] Header "HC desde Agenda Encuesta"
[ ] Botón "Marcar Visto y Cerrar" → callback
[ ] Test: Abrir manualmente ?historia=agendaId
```

### **Paso 3: src/App.jsx** - Lógica principal
```
[ ] Añadir [showHistoriaEncuesta, setShowHistoriaEncuesta]
[ ] Filtro "Solo Encuesta" en renderAgenda()
[ ] Botón "Abrir HC" → setShowHistoriaEncuesta(true)
[ ] Modal HC con callback onCerrarEncuestaAgenda
[ ] Integrar marcarAgendaVisto() en callback
```

### **Paso 4: Verificación & Commit**
```
[ ] Test end-to-end: Encuesta → Agenda → HC → Visto
[ ] git add . && git commit -m "feat: modo agenda encuesta"
[ ] git push origin main
[ ] Actualizar este TODO.md [x]
```

**Próximo paso automático: Editar utils/supabase.js**
