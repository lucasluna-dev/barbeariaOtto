import "react-native-url-polyfill";
import { createClient } from "@supabase/supabase-js";


const supabaseURL = "https://gkozyevgjuxhbdcmuezl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdrb3p5ZXZnanV4aGJkY211ZXpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3ODc1NDAsImV4cCI6MjA0NDM2MzU0MH0.ilDxDHIDK2gaDBmqStV1pZ7Iu4SiBGJM91ZSFcderLA"

export const supabase = createClient(supabaseURL, supabaseKey);
