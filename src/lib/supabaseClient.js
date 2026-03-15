import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://llzutvibxzizbrpzfewy.supabase.co'
const supabaseAnonKey = 'sb_publishable_iKtbGdnU6FyvW7eStrA_oQ_M7clyUDR'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
