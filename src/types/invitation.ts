export interface Invitation {
    _id?: string
    userID: string
    active: boolean
    due_date: string | Date
    type: string
    plan: string
    creation_date: string | Date
    last_update_date: string | Date
    label: string
    payment: string
  
    greeting: SectionWithText
    family: SectionWithFamily
    quote: SectionWithQuote
    itinerary: SectionWithItinerary
    dresscode: SectionWithDresscode
    gifts: SectionWithGifts
    notices: SectionWithNotices
    cover: CoverSection
    gallery: SectionWithGallery
    generals: GeneralsSection
  }
  
  interface SectionBase {
    active: boolean
    background: boolean
    separator: boolean
    id: number
  }
  
  interface SectionWithText extends SectionBase {
    title: string
    description: string
  }
  
  interface SectionWithFamily extends SectionBase {
    title: string
    personas: {
      title: string
      name: string
    }[]
  }
  
  interface SectionWithQuote extends SectionBase {
    description: string
    image: boolean
    image_dev: string
    image_prod: string
    text: {
      justify: string
      align: string
      font: string | null
      size: number
      opacity: number
      weight: number
      color: string
      width: number
      shadow: boolean
    }
  }
  
  interface SectionWithItinerary extends SectionBase {
    title: string
    object: ItineraryEvent[]
  }
  
  interface ItineraryEvent {
    name: string
    time: string
    subname: string
    address: Address
    subitems: SubEvent[] | null
    playlist: string | null
    active: boolean
    image: number
    id: string
  }
  
  interface Address {
    calle: string
    numero: string
    colonia: string
    CP: string
    ciudad: string
    estado: string
    url: string
  }
  
  interface SubEvent {
    name: string
    time: string
    description: string
  }
  
  interface SectionWithDresscode extends SectionBase {
    title: string
    description: string
    colors: string[]
    images_prod: string[]
    images_dev: string[]
    available: number
    onImages: boolean
    onLinks: boolean
  }
  
  interface SectionWithGifts extends SectionBase {
    title: string
    description: string
    cards: GiftCard[]
  }
  
  interface GiftCard {
    link: boolean
    type: string | null
    url: string | null
    bank: string | null
    name: string | null
    number: string | null
  }
  
  interface SectionWithNotices extends SectionBase {
    title: string
    notices: string[]
  }
  
  interface CoverSection {
    date: string | Date
    flexDirection: string
    fontSize: number
    fontWeight: number
    opacity: number
    align: string
    justify: string
    featured_prod: string
    featured_dev: string
    background: string
    image: string
    color: string
    auto: boolean
    timerColor: string
    timerType: number
    title: string
  }
  
  interface SectionWithGallery extends SectionBase {
    title: string
    gallery_prod: string[]
    gallery_dev: string[]
    available: number
  }
  
  interface GeneralsSection {
    color: string
    palette: {
      base: string
      primary: string
      secondary: string
      accent: string
      buttons: string
    }
    eventName: string
    font: string
    separator: number
    theme: boolean
    positions: number[]
  }