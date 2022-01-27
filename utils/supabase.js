"use strict";
var _a, _b;
exports.__esModule = true;
var supabase_js_1 = require("@supabase/supabase-js");
var supabase = (0, supabase_js_1.createClient)((_a = process.env.NEXT_PUBLIC_SUPABASE_URL) !== null && _a !== void 0 ? _a : '', (_b = process.env.NEXT_PUBLIC_SUPABASE_KEY) !== null && _b !== void 0 ? _b : '');
exports["default"] = supabase;
