'use client';

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [session, setSession] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const addSession = async () => {
      // chat_sessions tablosuna yeni bir satır ekle
      const { data, error } = await supabase
        .from('chat_sessions')
        .insert([{ user_id: 'test-user', started_at: new Date().toISOString() }])
        .select()
        .single();

      if (error) {
        setError(error.message);
      } else {
        setSession(data);
      }
    };

    addSession();
  }, []);

  return (
    <main>
      <h1>Supabase Test</h1>
      {error && <p style={{ color: "red" }}>Hata: {error}</p>}
      {session ? (
        <div>
          <p>Yeni chat session eklendi!</p>
          <pre>{JSON.stringify(session, null, 2)}</pre>
        </div>
      ) : (
        <p>Yeni bir chat session ekleniyor...</p>
      )}
    </main>
  );
}
