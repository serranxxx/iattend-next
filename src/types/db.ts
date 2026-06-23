// types/db.ts

export interface InvitationRow {
  id: string;
  user_id: string;
  active: boolean;
  started: boolean;
  type: string | null;
  plan: string | null;
  payment_type: string | null;
  created_at: string;
  updated_at: string;
  data: Record<string, unknown>;
}
