export type PgpKey = {
  fingerprint: string;
  created: string;
  expires?: string;
  status: "current" | "expired" | "revoked";
  note?: string;
};

// Newest first. Armored public keys live at /pgp/<FINGERPRINT>.asc (public/pgp/)
// and are never deleted: when a key expires or is replaced, flip its status here
// instead, so signatures made while it was valid stay verifiable.
// The current key is also served at the stable URL /pgp/pubkey.asc.
export const PGP_KEYS: PgpKey[] = [
  {
    fingerprint: "44DBE27ADDAE813D8621FADC367F34373E6DA64B",
    created: "2026-10-26",
    expires: "2028-10-25",
    status: "current",
  },
];
