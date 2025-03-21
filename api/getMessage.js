import { supabase } from "../lib/supabaseClient";

export default async function handler(req, res) {
    const { data, error } = await supabase
        .from('messages')
        .select('message')
        .single()

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    console.log("Fetched Message:", data);  
    res.status(200).json({ message: data?.message || "No message found" });
}
