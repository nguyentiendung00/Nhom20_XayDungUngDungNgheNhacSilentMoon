export const supabase = {
  auth: {
    signUp: async () => ({ data: { user: { id: 'demo-user' } }, error: null }),
    signInWithPassword: async () => ({ data: { user: { id: 'demo-user' } }, error: null }),
    signOut: async () => ({ error: null }),
    getSession: async () => ({ data: { session: null }, error: null }),
  },
  from: () => ({
    select: async () => ({ data: [], error: null }),
    insert: async () => ({ data: [], error: null }),
    update: async () => ({ data: [], error: null }),
    delete: async () => ({ data: [], error: null }),
    eq: function () { return this; },
    single: async () => ({ data: null, error: null }),
  }),
};