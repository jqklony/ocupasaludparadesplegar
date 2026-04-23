import React, { useState, useEffect, useMemo } from 'react';
import { 
  Building2, FileText, Receipt, Shield, Download, Printer,
  Calendar, ChevronDown, ChevronUp, Loader2, AlertCircle,
  CheckCircle, FileSpreadsheet, FileCheck, UserCheck, ArrowLeft,
  Search, Filter, Package, Mail, Eye, Users
} from 'lucide-react';
import { useAppState, useAppStateObject } from '../hooks/useAppState.js';
import { formatDate } from '../utils/formatters.js';

// Configuración localStorage para simular backend

  companies: 'siso_companies',
  patients: 'siso_db_patients',
  bills: 'siso_saved_bills',
  reports: 'siso_saved_reports',
  custodia: 'siso_cartas_custodia',
  doctor: 's
