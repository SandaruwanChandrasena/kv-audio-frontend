import { createClient} from "@supabase/supabase-js";

const anon_key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptaHZvaXpreWZtZXhsaHRrbG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4ODk4MDgsImV4cCI6MjA1NTQ2NTgwOH0.4T1ijHCzjtmNB0T6XAZl2oXzuqSEAtbN5C59R7-ygiE";

const supabase_url = "https://zmhvoizkyfmexlhtklmh.supabase.co/";

const supabase = createClient(supabase_url, anon_key);


export default function MediaUpload(file) {

    return new Promise((resolve, reject) => {
        if(file == null) {
            reject("No file Selected")
        }

        const timestamp = new Date().getTime();
        const fileName = timestamp + file.name
    
        supabase.storage.from("images").upload(fileName,file, {
            cacheControl: '3600',
            upsert:false,
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch(() => {
            reject("Error uploading File")
        })

    });



}