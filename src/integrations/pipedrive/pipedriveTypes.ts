
interface DealContact {
    label: string; 
    value: string; 
    primary: true 
}

export interface IProductResponse {
    id: number;
    name: string;
    item_price: number;
    quantity: number;
}
export interface IDealResponse {
    id: number;
    creator_user_id: {
      id: number;
      name: string;
      email: string;
      has_pic: number;
      pic_hash: null;
      active_flag: boolean;
      value: number;
    };
    user_id: {
      id: number;
      name: string;
      email: string;
      has_pic: number;
      pic_hash: null;
      active_flag: boolean;
      value: number;
    };
    person_id: {
      active_flag: boolean;
      name: string;
      email: DealContact[];
      phone: DealContact[];
      value: number;
    };
    org_id: {
      name: string;
      people_count: number;
      owner_id: number;
      address: string | null;
      active_flag: boolean;
      cc_email: string;
      value: number;
    };
    stage_id: number;
    title: string;
    value: number;
    currency: string;
    add_time: string;
    update_time: string;
    stage_change_time: null;
    active: boolean;
    deleted: boolean;
    statustringn: boolean;
    probability: boolean;
    next_activstringte: null;
    next_activity_time: null;
    next_activity_id: null;
    last_activity_id: null;
    last_activity_date: null;
    lost_reason: null;
    visible_to:string;
    close_time: string;
    pipeline_id: number;
    won_time: string;
    first_won_time: string;
    lost_time: null;
    products_count: number;
    files_count: number;
    notes_count: number;
    followers_count: number;
    email_messages_count: number;
    activities_count: number;
    done_activities_count: number;
    undone_activities_count: number;
    participants_count: number;
    expected_close_date: string | null;
    last_incoming_mail_time: null;
    last_outgoing_mail_time: null;
    label: null;
    stage_order_nr: number;
    person_name: string;
    org_name: string;
    next_activity_subject: null;
    next_activity_type: null;
    next_activity_duration: null;
    next_activity_note: null;
    formatted_value:string;
    weighted_value: number;
    formatted_weighted_value:string;
    weighted_value_currency:string;
    rotten_time: null;
    owner_name: string;
    cc_email:string;
    org_hidden: boolean;
    person_hidden: boolean;
}