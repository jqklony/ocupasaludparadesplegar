import { useState, useEffect } from 'react';
import { sp } from '../utils/storage.js'; // Simular backend con localStorage

// Hook simulado para ocupasalud-paradesplegar (frontend-only)
// Datos desde localStorage simulando Supabase
export const useCompanyDocuments = (companyId, nitQuery) => {
  const [certificates, setCertificates
