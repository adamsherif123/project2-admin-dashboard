export type Profile = {
    id: string
    created_datetime_utc: string
    modified_datetime_utc: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_superadmin: boolean
    is_in_study: boolean
    is_matrix_admin: boolean
  }
  
  export type ImageRow = {
    id: string
    created_datetime_utc: string
    modified_datetime_utc: string | null
    url: string
    is_common_use: boolean
    profile_id: string
    additional_context: string | null
    is_public: boolean
    image_description: string | null
    celebrity_recognition: string | null
    embedding?: unknown
  }
  
  export type Caption = {
    id: string
    created_datetime_utc: string
    modified_datetime_utc: string | null
    content: string
    is_public: boolean
    profile_id: string
    image_id: string
    humor_flavor_id: number | null
    is_featured: boolean
    caption_request_id: number | null
    like_count: number | null
    llm_prompt_chain_id: number | null
  }