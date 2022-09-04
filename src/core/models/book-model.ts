export interface Book {
  id: string;
  title: string;
  subtitle: string;
  authors?: string[];
  shelf?: string;
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  imageLinks: { smallThumbnail: string; thumbnail: string } | null;
  industryIdentifiers: { type: string; identifier: string }[];
  panelizationSummary: {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
  };
  readingModes: { image: boolean; text: boolean };
  infoLink: string;
  allowAnonLogging: boolean;
}
