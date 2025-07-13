     -- chat_sessions tablosu
     create table if not exists chat_sessions (
       id uuid primary key default gen_random_uuid(),
       created_at timestamp with time zone default now(),
       updated_at timestamp with time zone default now()
     );

     -- chat_messages tablosu
     create table if not exists chat_messages (
       id uuid primary key default gen_random_uuid(),
       content text not null,
       role text not null check (role in ('user', 'assistant')),
       message_type text not null check (message_type in ('text', 'image')),
       created_at timestamp with time zone default now(),
       session_id uuid not null references chat_sessions(id)
     );
