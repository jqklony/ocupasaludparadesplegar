// src/pages/CartaCustodia.jsx — Módulo Carta de Custodia (monolito OcupaSalud)
// Réplica exacta del documento oficial de Historias Clínicas Ocupacionales
import React, { useState, useMemo, useCallback } from "react";

const MONTHS_ES = [
  "enero","febrero","marzo","abril","mayo","junio",
  "julio","agosto","septiembre","octubre","noviembre","diciembre",
];

const formatDateEs = (isoDate) => {
  const [y, m, d] = isoDate.split("-").map(Number);
  return `${d} de ${MONTHS_ES[m - 1]} de ${y}`;
};

// ─── Documento — réplica exacta del PDF ──────────────────────────────────
function CartaDocumento({
  docNombre, docTitulo, docLicencia, docCC, docCel, docEmail, docCiudad,
  firmaSrc, fechaTexto, empresaNombre, ciudadDest, mesTexto, anioVal,
}) {
  const s = {
    wrap: {
      fontFamily: '"Arial","Helvetica",sans-serif',
      fontSize: "11pt",
      color: "#111",
      background: "white",
      width: "816px",
      minHeight: "1056px",
      padding: "56px 68px 48px",
      boxSizing: "border-box",
    },
    headerRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" },
    logoWrap:  { display: "flex", alignItems: "center", gap: "10px" },
    logoBadge: {
      width: "50px", height: "50px",
      background: "linear-gradient(135deg,#065f46 0%,#0f766e 100%)",
      borderRadius: "10px",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    },
    sep: {
      height: "2px",
      background: "linear-gradient(90deg,#065f46 0%,#0f766e 60%,#0d9488 100%)",
      margin: "10px 0 24px", border: "none",
    },
    p: { fontSize: "11pt", lineHeight: "1.65", marginBottom: "14px", textAlign: "justify" },
    pClosing: { fontSize: "11pt", lineHeight: "1.65", marginBottom: "52px" },
    subject: { textAlign: "center", fontWeight: 700, fontSize: "11pt", marginBottom: "26px" },
    footerSep: { height: "1px", background: "#374151", margin: "12px 0 10px", border: "none" },
    footerText: { textAlign: "center", fontSize: "8pt", color: "#374151", lineHeight: 1.8, margin: 0 },
  };

  return (
    <div className="carta-doc carta-visual bg-white shadow-2xl print:shadow-none mx-auto" style={s.wrap}>
      {/* ENCABEZADO */}
      <div style={s.headerRow}>
        <div style={s.logoWrap}>
          <div style={s.logoBadge}>
            <span style={{ color: "white", fontWeight: 900, fontSize: "15px", letterSpacing: "-0.5px" }}>JC</span>
          </div>
          <div>
            <p style={{ fontSize: "13pt", fontWeight: 900, color: "#111", margin: 0, lineHeight: 1.25 }}>
              DR. JULIAN CUCALON
            </p>
            <p style={{ fontSize: "7.5pt", color: "#4B5563", margin: 0, letterSpacing: "0.06em", marginTop: "3px" }}>
              MEDICO ESPECIALISTA EN SST
            </p>
          </div>
        </div>
        <div style={{ textAlign: "right", fontSize: "8.5pt", color: "#374151", lineHeight: 1.55 }}>
          <p style={{ margin: 0, fontWeight: 700 }}>{docNombre}</p>
          <p style={{ margin: 0 }}>Licencia: Resolución {docLicencia} (Cauca)</p>
          <p style={{ margin: 0 }}>{docCiudad.toUpperCase()}</p>
          <p style={{ margin: 0 }}>Cel: {docCel}</p>
          <p style={{ margin: 0 }}>Email: {docEmail.toUpperCase()}</p>
        </div>
      </div>

      {/* SEPARADOR TEAL */}
      <hr style={s.sep} />

      {/* FECHA */}
      <p style={{ textAlign: "right", marginBottom: "28px", fontSize: "11pt" }}>{fechaTexto}</p>

      {/* DESTINATARIO */}
      <div style={{ marginBottom: "28px" }}>
        <p style={{ margin: 0, fontSize: "11pt" }}>Señores</p>
        <p style={{ margin: 0, fontSize: "11pt", fontWeight: 700 }}>{empresaNombre}</p>
        <p style={{ margin: 0, fontSize: "11pt" }}>{ciudadDest}</p>
      </div>

      {/* ASUNTO */}
      <p style={s.subject}>ASUNTO: CARTA CUSTODIA DE LAS HISTORIAS CLÍNICAS OCUPACIONALES</p>

      {/* CUERPO */}
      <p style={s.p}>Cordial Saludo,</p>

      <p style={s.p}>
        Por medio de la presente se hace constar la custodia de las Historias Clínicas Ocupacionales
        del personal valorado durante el <strong>mes de {mesTexto} de {anioVal}.</strong>
      </p>

      <p style={s.p}>
        Dichas valoraciones fueron realizadas por el <strong>Dr. {docNombre}</strong>, identificado
        con cédula de ciudadanía número <strong>{docCC}</strong>, MEDICO ESPECIALISTA EN SST, con
        Licencia de Salud Ocupacional <strong>Resolución {docLicencia} (Cauca).</strong>
      </p>

      <p style={s.p}>
        Doy garantía de que el archivo de las historias clínicas se encuentra bajo custodia
        electrónica en la ciudad de {docCiudad}, dando así estricto cumplimiento a lo establecido
        en la <strong>Resolución 1072 de 2015</strong> del Ministerio de la Protección Social. La
        custodia está garantizada por un periodo de <strong>15 años</strong> contados a partir de
        la fecha de la última atención, conforme a lo dispuesto en la{" "}
        <strong>Resolución 1843 de 2025</strong> del Ministerio de Salud y Protección Social.
      </p>

      <p style={s.p}>
        Asimismo, se certifica que se cuenta con un sistema de historia clínica sistematizado que
        cumple a cabalidad con los requisitos técnicos y de seguridad exigidos por la normatividad
        vigente para garantizar la confidencialidad e integridad de la información.
      </p>

      <p style={s.pClosing}>Atentamente,</p>

      {/* FIRMA */}
      <div style={{ textAlign: "center", marginBottom: "14px" }}>
        {firmaSrc ? (
          <img src={firmaSrc} alt="Firma digital"
            style={{ maxHeight: "72px", maxWidth: "190px", objectFit: "contain", display: "block", margin: "0 auto 6px" }} />
        ) : (
          <div style={{
            height: "64px", width: "190px", margin: "0 auto 6px",
            border: "1.5px dashed #9CA3AF", borderRadius: "6px",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ fontSize: "8pt", color: "#9CA3AF" }}>Firma digital</span>
          </div>
        )}
      </div>

      {/* PIE */}
      <hr style={s.footerSep} />
      <div style={s.footerText}>
        <p style={{ margin: 0, fontWeight: 700 }}>{docNombre}</p>
        <p style={{ margin: 0 }}>{docTitulo}</p>
        <p style={{ margin: 0 }}>CC: {docCC}</p>
        <p style={{ margin: 0 }}>Licencia SST: Resolución {docLicencia} (Cauca)</p>
        <p style={{ margin: 0 }}>Cel: {docCel}</p>
        <p style={{ margin: 0 }}>Generado electrónicamente {docEmail} Integral de Salud Ocupacional</p>
        <p style={{ margin: 0 }}>{docCiudad} – Cauca</p>
      </div>
    </div>
  );
}

// ─── Componente principal ────────────────────────────────────────────────
export default function CartaCustodia({
  activeDoctorData,
  activeSignature,
  companies,
  saveInforme,
  savedInformes,
  goTo,
  showAlert,
  currentUser,
}) {
  const today = new Date();
  const prevMes  = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
  const prevAnio = today.getMonth() === 0 ? today.getFullYear() - 1 : today.getFullYear();

  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [fechaCarta, setFechaCarta] = useState(today.toISOString().split("T")[0]);
  const [mesVal, setMesVal]   = useState(prevMes);
  const [anioVal, setAnioVal] = useState(prevAnio);
  const [ciudadDest, setCiudadDest] = useState("Ciudad");
  const [saved, setSaved] = useState(false);

  // Datos del médico
  const docNombre   = (activeDoctorData?.nombre   || "JULIAN CUCALON").toUpperCase();
  const docTitulo   = (activeDoctorData?.titulo    || "MEDICO ESPECIALISTA EN SST").toUpperCase();
  const docLicencia = activeDoctorData?.licencia   || "14497-12-2019";
  const docCC       = activeDoctorData?.cedula     || activeDoctorData?.rut || "1061750704";
  const docCel      = activeDoctorData?.celular    || "3182213979";
  const docEmail    = activeDoctorData?.email      || "dr.juliancucalon@gmail.com";
  const docCiudad   = activeDoctorData?.ciudad     || "Popayán";
  const firmaSrc    = activeSignature || activeDoctorData?.signature || activeDoctorData?.firma || null;

  const selectedCompany = useMemo(
    () => (companies || []).find(c => c.id === selectedCompanyId),
    [companies, selectedCompanyId]
  );
  const empresaNombre  = selectedCompany?.nombre || selectedCompany?.empresaNombre || "NOMBRE DE LA EMPRESA";
  const ciudadDisplay  = selectedCompany?.ciudad || ciudadDest;
  const mesTexto       = MONTHS_ES[mesVal];
  const fechaTexto     = formatDateEs(fechaCarta);

  const handleGuardar = useCallback(() => {
    if (!selectedCompanyId) { showAlert("Selecciona una empresa primero"); return; }
    const custodia = {
      id: "inf_cust_" + Date.now(),
      empresaId: selectedCompanyId,
      empresaNombre,
      tipo: "custodia",
      fecha: fechaCarta,
      mes: mesVal,
      anio: anioVal,
      medicoNombre: docNombre,
      medicoLicencia: docLicencia,
      savedAt: new Date().toISOString(),
    };
    saveInforme(custodia);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    showAlert("✅ Carta de Custodia guardada para " + empresaNombre);
  }, [selectedCompanyId, empresaNombre, fechaCarta, mesVal, anioVal, docNombre, docLicencia, saveInforme, showAlert]);

  const handleEmail = () => {
    const to  = selectedCompany?.email || selectedCompany?.correo || "";
    const sub = encodeURIComponent(`Carta Custodia HC Ocupacionales - ${mesTexto} ${anioVal}`);
    const bod = encodeURIComponent(
      `Estimados señores ${empresaNombre},\n\n` +
      `Adjunto la Carta de Custodia de las Historias Clínicas Ocupacionales ` +
      `del personal valorado durante el mes de ${mesTexto} de ${anioVal}.\n\n` +
      `Atentamente,\n${docNombre}\n${docTitulo}`
    );
    window.location.href = `mailto:${to}?subject=${sub}&body=${bod}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <style>{`
        @media print {.carta-wrap { padding: 0 !important; background: white !important; }
          .no-print { display: none !important; }
          .carta-doc { box-shadow: none !important; margin: 0 !important; width: 100% !important; }
          @page { margin: 0; size: letter portrait; }
          body { background: white; }
        }
      `}</style>

      {/* ── PANEL IZQUIERDO ── */}
      <div className="no-print w-72 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-800 to-teal-700 p-4">
          <h2 className="text-sm font-black text-white">📁 Carta de Custodia</h2>
          <p className="text-[10px] text-emerald-300">Historias Clínicas Ocupacionales</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* Empresa */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">🏢 Empresa destinataria *</label>
            <select
              value={selectedCompanyId}
              onChange={e => {
                setSelectedCompanyId(e.target.value);
                const co = (companies || []).find(c => c.id === e.target.value);
                if (co?.ciudad) setCiudadDest(co.ciudad);
              }}
              className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white"
            >
              <option value="">— Seleccionar empresa —</option>
              {(companies || []).map(c => (
                <option key={c.id} value={c.id}>{c.nombre || c.empresaNombre}</option>
              ))}
            </select>
          </div>

          {/* Fecha */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">📅 Fecha de la carta</label>
            <input type="date" value={fechaCarta} onChange={e => setFechaCarta(e.target.value)}
              className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>

          {/* Mes/Año */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">Mes de valoraciones</label>
            <div className="flex gap-2">
              <select value={mesVal} onChange={e => setMesVal(Number(e.target.value))}
                className="flex-1 text-xs border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white capitalize">
                {MONTHS_ES.map((m, i) => <option key={i} value={i}>{m}</option>)}
              </select>
              <input type="number" value={anioVal} onChange={e => setAnioVal(Number(e.target.value))}
                min="2020" max="2035"
                className="w-20 text-xs border border-gray-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>
          </div>

          {/* Ciudad */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1.5">Ciudad destinatario</label>
            <input type="text" value={ciudadDest} onChange={e => setCiudadDest(e.target.value)}
              className="w-full text-xs border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              placeholder="Ciudad" />
          </div>

          {/* Doctor info */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 space-y-0.5">
            <p className="text-[10px] font-bold text-emerald-800 mb-1.5">👨‍⚕️ Médico (auto)</p>
            <p className="text-[10px] text-gray-700"><span className="font-bold">Nombre:</span> {docNombre}</p>
            <p className="text-[10px] text-gray-700"><span className="font-bold">CC:</span> {docCC}</p>
            <p className="text-[10px] text-gray-700"><span className="font-bold">Licencia:</span> {docLicencia}</p>
            <p className="text-[10px] text-gray-700"><span className="font-bold">Cel:</span> {docCel}</p>
            {firmaSrc
              ? <p className="text-[10px] text-emerald-700 font-bold mt-1">✅ Firma digital cargada</p>
              : <p className="text-[10px] text-amber-600 mt-1">⚠ Sin firma digital</p>}
          </div>
        </div>

        {/* Botones */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button onClick={() => window.print()}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition">
            🖨️ Imprimir / Descargar PDF
          </button>
          <button onClick={handleGuardar}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition border-2 ${
              saved ? "bg-emerald-50 border-emerald-500 text-emerald-700" : "bg-white border-emerald-300 text-emerald-700 hover:bg-emerald-50"
            }`}>
            {saved ? "✅ ¡Guardada!" : "💾 Guardar carta"}
          </button>
          <button onClick={handleEmail} disabled={!selectedCompanyId}
            className="w-full flex items-center justify-center gap-2 py-2.5 bg-white border-2 border-sky-300 text-sky-700 rounded-lg text-xs font-bold hover:bg-sky-50 disabled:opacity-40 transition">
            📧 Enviar por Email
          </button>
          <button onClick={() => goTo("dashboard")}
            className="w-full flex items-center justify-center gap-2 py-2 text-gray-500 hover:text-gray-700 text-xs transition">
            ← Volver
          </button>
        </div>
      </div>

      {/* ── PANEL DERECHO: DOCUMENTO ── */}
      <div className="flex-1 overflow-auto bg-gray-200 p-8 flex justify-center items-start">
        <CartaDocumento
          docNombre={docNombre}
          docTitulo={docTitulo}
          docLicencia={docLicencia}
          docCC={docCC}
          docCel={docCel}
          docEmail={docEmail}
          docCiudad={docCiudad}
          firmaSrc={firmaSrc}
          fechaTexto={fechaTexto}
          empresaNombre={empresaNombre}
          ciudadDest={ciudadDisplay}
          mesTexto={mesTexto}
          anioVal={anioVal}
        />
      </div>
    </div>
  );
}
