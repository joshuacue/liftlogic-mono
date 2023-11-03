import { api } from './api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  EmailAddress: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type ACallToActionBlock = {
  __typename?: 'ACallToActionBlock';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  clickToCallLabel?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AConsultationSectionBlock = {
  __typename?: 'AConsultationSectionBlock';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  backgroundImage: Media;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  formLink?: Maybe<Scalars['String']['output']>;
  formLinkLabel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AConsultationSectionBlockBackgroundImageArgs = {
  where?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Where>;
};

export type AConsultationSectionBlock_BackgroundImage_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AConsultationSectionBlock_BackgroundImage_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AConsultationSectionBlock_BackgroundImage_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AConsultationSectionBlock_BackgroundImage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filename_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filesize_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Height_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__MimeType_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Url_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Width_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filename_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filesize_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Height_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__MimeType_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Url_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Width_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type AConsultationSectionBlock_BackgroundImage_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AConsultationSectionBlock_BackgroundImage_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AConsultationSectionBlock_BackgroundImage_Where = {
  AND?: InputMaybe<
    Array<InputMaybe<AConsultationSectionBlock_BackgroundImage_Where_And>>
  >;
  OR?: InputMaybe<
    Array<InputMaybe<AConsultationSectionBlock_BackgroundImage_Where_Or>>
  >;
  alt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Alt_Operator>;
  createdAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_CreatedAt_Operator>;
  filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filename_Operator>;
  filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filesize_Operator>;
  height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Height_Operator>;
  id?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Id_Operator>;
  mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_MimeType_Operator>;
  prefix?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Source_Operator>;
  updatedAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_UpdatedAt_Operator>;
  url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Url_Operator>;
  width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Width_Operator>;
};

export type AConsultationSectionBlock_BackgroundImage_Where_And = {
  alt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Alt_Operator>;
  createdAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_CreatedAt_Operator>;
  filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filename_Operator>;
  filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filesize_Operator>;
  height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Height_Operator>;
  id?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Id_Operator>;
  mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_MimeType_Operator>;
  prefix?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Source_Operator>;
  updatedAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_UpdatedAt_Operator>;
  url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Url_Operator>;
  width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Width_Operator>;
};

export type AConsultationSectionBlock_BackgroundImage_Where_Or = {
  alt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Alt_Operator>;
  createdAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_CreatedAt_Operator>;
  filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filename_Operator>;
  filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Filesize_Operator>;
  height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Height_Operator>;
  id?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Id_Operator>;
  mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_MimeType_Operator>;
  prefix?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Source_Operator>;
  updatedAt?: InputMaybe<AConsultationSectionBlock_BackgroundImage_UpdatedAt_Operator>;
  url?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Url_Operator>;
  width?: InputMaybe<AConsultationSectionBlock_BackgroundImage_Width_Operator>;
};

export type AConsultationSectionBlock_BackgroundImage_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFooterBlock = {
  __typename?: 'AFooterBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  navItems?: Maybe<Array<AFooterBlock_NavItems>>;
};

export type AFooterBlock_NavItems = {
  __typename?: 'AFooterBlock_NavItems';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<AFooterBlock_NavItems_Link>;
};

export type AFooterBlock_NavItems_Link = {
  __typename?: 'AFooterBlock_NavItems_Link';
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<AFooterBlock_NavItems_Link_Reference_Relationship>;
  type?: Maybe<AFooterBlock_NavItems_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AFooterBlock_NavItems_Link_Reference = Page;

export enum AFooterBlock_NavItems_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type AFooterBlock_NavItems_Link_Reference_Relationship = {
  __typename?: 'AFooterBlock_NavItems_Link_Reference_Relationship';
  relationTo?: Maybe<AFooterBlock_NavItems_Link_Reference_RelationTo>;
  value?: Maybe<AFooterBlock_NavItems_Link_Reference>;
};

export enum AFooterBlock_NavItems_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type AFormBlock = {
  __typename?: 'AFormBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  form: Form;
  formHeader?: Maybe<Scalars['String']['output']>;
  formSubheader?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  noteContent?: Maybe<Scalars['String']['output']>;
  noteTitle?: Maybe<Scalars['String']['output']>;
  sectionDescription: Scalars['JSON']['output'];
  sectionHeader?: Maybe<Scalars['String']['output']>;
  sectionImage?: Maybe<Media>;
  sectionSubheader?: Maybe<Scalars['String']['output']>;
};

export type AFormBlockSectionDescriptionArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type AFormBlockSectionImageArgs = {
  where?: InputMaybe<AFormBlock_SectionImage_Where>;
};

export type AFormBlock_SectionImage_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AFormBlock_SectionImage_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AFormBlock_SectionImage_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AFormBlock_SectionImage_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AFormBlock_SectionImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<AFormBlock_SectionImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<AFormBlock_SectionImage_Where_Or>>>;
  alt?: InputMaybe<AFormBlock_SectionImage_Alt_Operator>;
  createdAt?: InputMaybe<AFormBlock_SectionImage_CreatedAt_Operator>;
  filename?: InputMaybe<AFormBlock_SectionImage_Filename_Operator>;
  filesize?: InputMaybe<AFormBlock_SectionImage_Filesize_Operator>;
  height?: InputMaybe<AFormBlock_SectionImage_Height_Operator>;
  id?: InputMaybe<AFormBlock_SectionImage_Id_Operator>;
  mimeType?: InputMaybe<AFormBlock_SectionImage_MimeType_Operator>;
  prefix?: InputMaybe<AFormBlock_SectionImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AFormBlock_SectionImage_Source_Operator>;
  updatedAt?: InputMaybe<AFormBlock_SectionImage_UpdatedAt_Operator>;
  url?: InputMaybe<AFormBlock_SectionImage_Url_Operator>;
  width?: InputMaybe<AFormBlock_SectionImage_Width_Operator>;
};

export type AFormBlock_SectionImage_Where_And = {
  alt?: InputMaybe<AFormBlock_SectionImage_Alt_Operator>;
  createdAt?: InputMaybe<AFormBlock_SectionImage_CreatedAt_Operator>;
  filename?: InputMaybe<AFormBlock_SectionImage_Filename_Operator>;
  filesize?: InputMaybe<AFormBlock_SectionImage_Filesize_Operator>;
  height?: InputMaybe<AFormBlock_SectionImage_Height_Operator>;
  id?: InputMaybe<AFormBlock_SectionImage_Id_Operator>;
  mimeType?: InputMaybe<AFormBlock_SectionImage_MimeType_Operator>;
  prefix?: InputMaybe<AFormBlock_SectionImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AFormBlock_SectionImage_Source_Operator>;
  updatedAt?: InputMaybe<AFormBlock_SectionImage_UpdatedAt_Operator>;
  url?: InputMaybe<AFormBlock_SectionImage_Url_Operator>;
  width?: InputMaybe<AFormBlock_SectionImage_Width_Operator>;
};

export type AFormBlock_SectionImage_Where_Or = {
  alt?: InputMaybe<AFormBlock_SectionImage_Alt_Operator>;
  createdAt?: InputMaybe<AFormBlock_SectionImage_CreatedAt_Operator>;
  filename?: InputMaybe<AFormBlock_SectionImage_Filename_Operator>;
  filesize?: InputMaybe<AFormBlock_SectionImage_Filesize_Operator>;
  height?: InputMaybe<AFormBlock_SectionImage_Height_Operator>;
  id?: InputMaybe<AFormBlock_SectionImage_Id_Operator>;
  mimeType?: InputMaybe<AFormBlock_SectionImage_MimeType_Operator>;
  prefix?: InputMaybe<AFormBlock_SectionImage_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AFormBlock_SectionImage_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AFormBlock_SectionImage_Source_Operator>;
  updatedAt?: InputMaybe<AFormBlock_SectionImage_UpdatedAt_Operator>;
  url?: InputMaybe<AFormBlock_SectionImage_Url_Operator>;
  width?: InputMaybe<AFormBlock_SectionImage_Width_Operator>;
};

export type AFormBlock_SectionImage_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock = {
  __typename?: 'AHeaderBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  companylogo: Media;
  id?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  phoneNumberLabel?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type AHeaderBlockCompanylogoArgs = {
  where?: InputMaybe<AHeaderBlock_Companylogo_Where>;
};

export type AHeaderBlock_Companylogo_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AHeaderBlock_Companylogo_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AHeaderBlock_Companylogo_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type AHeaderBlock_Companylogo_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type AHeaderBlock_Companylogo_Where = {
  AND?: InputMaybe<Array<InputMaybe<AHeaderBlock_Companylogo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<AHeaderBlock_Companylogo_Where_Or>>>;
  alt?: InputMaybe<AHeaderBlock_Companylogo_Alt_Operator>;
  createdAt?: InputMaybe<AHeaderBlock_Companylogo_CreatedAt_Operator>;
  filename?: InputMaybe<AHeaderBlock_Companylogo_Filename_Operator>;
  filesize?: InputMaybe<AHeaderBlock_Companylogo_Filesize_Operator>;
  height?: InputMaybe<AHeaderBlock_Companylogo_Height_Operator>;
  id?: InputMaybe<AHeaderBlock_Companylogo_Id_Operator>;
  mimeType?: InputMaybe<AHeaderBlock_Companylogo_MimeType_Operator>;
  prefix?: InputMaybe<AHeaderBlock_Companylogo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AHeaderBlock_Companylogo_Source_Operator>;
  updatedAt?: InputMaybe<AHeaderBlock_Companylogo_UpdatedAt_Operator>;
  url?: InputMaybe<AHeaderBlock_Companylogo_Url_Operator>;
  width?: InputMaybe<AHeaderBlock_Companylogo_Width_Operator>;
};

export type AHeaderBlock_Companylogo_Where_And = {
  alt?: InputMaybe<AHeaderBlock_Companylogo_Alt_Operator>;
  createdAt?: InputMaybe<AHeaderBlock_Companylogo_CreatedAt_Operator>;
  filename?: InputMaybe<AHeaderBlock_Companylogo_Filename_Operator>;
  filesize?: InputMaybe<AHeaderBlock_Companylogo_Filesize_Operator>;
  height?: InputMaybe<AHeaderBlock_Companylogo_Height_Operator>;
  id?: InputMaybe<AHeaderBlock_Companylogo_Id_Operator>;
  mimeType?: InputMaybe<AHeaderBlock_Companylogo_MimeType_Operator>;
  prefix?: InputMaybe<AHeaderBlock_Companylogo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AHeaderBlock_Companylogo_Source_Operator>;
  updatedAt?: InputMaybe<AHeaderBlock_Companylogo_UpdatedAt_Operator>;
  url?: InputMaybe<AHeaderBlock_Companylogo_Url_Operator>;
  width?: InputMaybe<AHeaderBlock_Companylogo_Width_Operator>;
};

export type AHeaderBlock_Companylogo_Where_Or = {
  alt?: InputMaybe<AHeaderBlock_Companylogo_Alt_Operator>;
  createdAt?: InputMaybe<AHeaderBlock_Companylogo_CreatedAt_Operator>;
  filename?: InputMaybe<AHeaderBlock_Companylogo_Filename_Operator>;
  filesize?: InputMaybe<AHeaderBlock_Companylogo_Filesize_Operator>;
  height?: InputMaybe<AHeaderBlock_Companylogo_Height_Operator>;
  id?: InputMaybe<AHeaderBlock_Companylogo_Id_Operator>;
  mimeType?: InputMaybe<AHeaderBlock_Companylogo_MimeType_Operator>;
  prefix?: InputMaybe<AHeaderBlock_Companylogo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<AHeaderBlock_Companylogo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<AHeaderBlock_Companylogo_Source_Operator>;
  updatedAt?: InputMaybe<AHeaderBlock_Companylogo_UpdatedAt_Operator>;
  url?: InputMaybe<AHeaderBlock_Companylogo_Url_Operator>;
  width?: InputMaybe<AHeaderBlock_Companylogo_Width_Operator>;
};

export type AHeaderBlock_Companylogo_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type AListSectionBlock = {
  __typename?: 'AListSectionBlock';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  enableLink?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<AListSectionBlock_Link>;
  listItems?: Maybe<Scalars['String']['output']>;
  sectionFooter?: Maybe<Scalars['String']['output']>;
};

export type AListSectionBlock_Link = {
  __typename?: 'AListSectionBlock_Link';
  appearance?: Maybe<AListSectionBlock_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<AListSectionBlock_Link_Reference_Relationship>;
  type?: Maybe<AListSectionBlock_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type AListSectionBlock_Link_Reference = Page;

export enum AListSectionBlock_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type AListSectionBlock_Link_Reference_Relationship = {
  __typename?: 'AListSectionBlock_Link_Reference_Relationship';
  relationTo?: Maybe<AListSectionBlock_Link_Reference_RelationTo>;
  value?: Maybe<AListSectionBlock_Link_Reference>;
};

export enum AListSectionBlock_Link_Appearance {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum AListSectionBlock_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type APrivacyPolicy = {
  __typename?: 'APrivacyPolicy';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  privacyPolicy?: Maybe<Scalars['JSON']['output']>;
};

export type APrivacyPolicyPrivacyPolicyArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type ASectionWithImageBlock = {
  __typename?: 'ASectionWithImageBlock';
  backgroundColor?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  direction?: Maybe<ASectionWithImageBlock_Direction>;
  enableLink?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ASectionWithImageBlock_Link>;
  media: Media;
  title?: Maybe<Scalars['String']['output']>;
};

export type ASectionWithImageBlockMediaArgs = {
  where?: InputMaybe<ASectionWithImageBlock_Media_Where>;
};

export type ASectionWithImageBlock_Link = {
  __typename?: 'ASectionWithImageBlock_Link';
  appearance?: Maybe<ASectionWithImageBlock_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<ASectionWithImageBlock_Link_Reference_Relationship>;
  type?: Maybe<ASectionWithImageBlock_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ASectionWithImageBlock_Link_Reference = Page;

export enum ASectionWithImageBlock_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type ASectionWithImageBlock_Link_Reference_Relationship = {
  __typename?: 'ASectionWithImageBlock_Link_Reference_Relationship';
  relationTo?: Maybe<ASectionWithImageBlock_Link_Reference_RelationTo>;
  value?: Maybe<ASectionWithImageBlock_Link_Reference>;
};

export enum ASectionWithImageBlock_Link_Appearance {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum ASectionWithImageBlock_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type ASectionWithImageBlock_Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ASectionWithImageBlock_Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type ASectionWithImageBlock_Media_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ASectionWithImageBlock_Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ASectionWithImageBlock_Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<ASectionWithImageBlock_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ASectionWithImageBlock_Media_Where_Or>>>;
  alt?: InputMaybe<ASectionWithImageBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<ASectionWithImageBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<ASectionWithImageBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<ASectionWithImageBlock_Media_Filesize_Operator>;
  height?: InputMaybe<ASectionWithImageBlock_Media_Height_Operator>;
  id?: InputMaybe<ASectionWithImageBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<ASectionWithImageBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<ASectionWithImageBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<ASectionWithImageBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<ASectionWithImageBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<ASectionWithImageBlock_Media_Url_Operator>;
  width?: InputMaybe<ASectionWithImageBlock_Media_Width_Operator>;
};

export type ASectionWithImageBlock_Media_Where_And = {
  alt?: InputMaybe<ASectionWithImageBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<ASectionWithImageBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<ASectionWithImageBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<ASectionWithImageBlock_Media_Filesize_Operator>;
  height?: InputMaybe<ASectionWithImageBlock_Media_Height_Operator>;
  id?: InputMaybe<ASectionWithImageBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<ASectionWithImageBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<ASectionWithImageBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<ASectionWithImageBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<ASectionWithImageBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<ASectionWithImageBlock_Media_Url_Operator>;
  width?: InputMaybe<ASectionWithImageBlock_Media_Width_Operator>;
};

export type ASectionWithImageBlock_Media_Where_Or = {
  alt?: InputMaybe<ASectionWithImageBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<ASectionWithImageBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<ASectionWithImageBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<ASectionWithImageBlock_Media_Filesize_Operator>;
  height?: InputMaybe<ASectionWithImageBlock_Media_Height_Operator>;
  id?: InputMaybe<ASectionWithImageBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<ASectionWithImageBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<ASectionWithImageBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<ASectionWithImageBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<ASectionWithImageBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<ASectionWithImageBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<ASectionWithImageBlock_Media_Url_Operator>;
  width?: InputMaybe<ASectionWithImageBlock_Media_Width_Operator>;
};

export type ASectionWithImageBlock_Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum ASectionWithImageBlock_Direction {
  Column = 'column',
  ColumnReversed = 'column_reversed',
  Row = 'row',
  RowReversed = 'row_reversed',
}

export type AShortformBlock = {
  __typename?: 'AShortformBlock';
  attention?: Maybe<Scalars['String']['output']>;
  attentionMessage?: Maybe<Scalars['String']['output']>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  callUsMessage?: Maybe<Scalars['String']['output']>;
  callUsNumber?: Maybe<Scalars['String']['output']>;
  footerBadges?: Maybe<Array<AShortformBlock_FooterBadges>>;
  form?: Maybe<Form>;
  id?: Maybe<Scalars['String']['output']>;
  sectionHeader?: Maybe<Scalars['String']['output']>;
  sectionSubheader?: Maybe<Scalars['String']['output']>;
};

export type AShortformBlock_FooterBadges = {
  __typename?: 'AShortformBlock_FooterBadges';
  iconUrl?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
};

export type AThankYouBlock = {
  __typename?: 'AThankYouBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  callButtonText?: Maybe<Scalars['String']['output']>;
  congratsMessageList?: Maybe<Array<AThankYouBlock_CongratsMessageList>>;
  header?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  initialTime?: Maybe<Scalars['Float']['output']>;
  messages?: Maybe<Array<AThankYouBlock_Messages>>;
  obligationMessage?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  subMessage?: Maybe<Scalars['String']['output']>;
};

export type AThankYouBlock_CongratsMessageList = {
  __typename?: 'AThankYouBlock_CongratsMessageList';
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type AThankYouBlock_Messages = {
  __typename?: 'AThankYouBlock_Messages';
  action?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  categories?: Maybe<CategoriesAccess>;
  form_submissions?: Maybe<Form_SubmissionsAccess>;
  forms?: Maybe<FormsAccess>;
  landingPage?: Maybe<LandingPageAccess>;
  media?: Maybe<MediaAccess>;
  pages?: Maybe<PagesAccess>;
  posts?: Maybe<PostsAccess>;
  redirects?: Maybe<RedirectsAccess>;
  sites?: Maybe<SitesAccess>;
  users?: Maybe<UsersAccess>;
};

export type Archive = {
  __typename?: 'Archive';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  categories?: Maybe<Array<Category>>;
  id?: Maybe<Scalars['String']['output']>;
  introContent: Scalars['JSON']['output'];
  limit?: Maybe<Scalars['Float']['output']>;
  populateBy?: Maybe<Archive_PopulateBy>;
  populatedDocs?: Maybe<Array<Archive_PopulatedDocs_Relationship>>;
  populatedDocsTotal?: Maybe<Scalars['Float']['output']>;
  relationTo?: Maybe<Archive_RelationTo>;
  selectedDocs?: Maybe<Array<Archive_SelectedDocs_Relationship>>;
};

export type ArchiveIntroContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Archive_PopulatedDocs = Page | Post;

export enum Archive_PopulatedDocs_RelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export type Archive_PopulatedDocs_Relationship = {
  __typename?: 'Archive_PopulatedDocs_Relationship';
  relationTo?: Maybe<Archive_PopulatedDocs_RelationTo>;
  value?: Maybe<Archive_PopulatedDocs>;
};

export type Archive_SelectedDocs = Page | Post;

export enum Archive_SelectedDocs_RelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export type Archive_SelectedDocs_Relationship = {
  __typename?: 'Archive_SelectedDocs_Relationship';
  relationTo?: Maybe<Archive_SelectedDocs_RelationTo>;
  value?: Maybe<Archive_SelectedDocs>;
};

export enum Archive_PopulateBy {
  Collection = 'collection',
  Selection = 'selection',
}

export enum Archive_RelationTo {
  Pages = 'pages',
}

export type Categories = {
  __typename?: 'Categories';
  docs?: Maybe<Array<Maybe<Category>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CategoriesCreateAccess = {
  __typename?: 'CategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesCreateDocAccess = {
  __typename?: 'CategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteAccess = {
  __typename?: 'CategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDeleteDocAccess = {
  __typename?: 'CategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesDocAccessFields = {
  __typename?: 'CategoriesDocAccessFields';
  breadcrumbs?: Maybe<CategoriesDocAccessFields_Breadcrumbs>;
  createdAt?: Maybe<CategoriesDocAccessFields_CreatedAt>;
  parent?: Maybe<CategoriesDocAccessFields_Parent>;
  site?: Maybe<CategoriesDocAccessFields_Site>;
  title?: Maybe<CategoriesDocAccessFields_Title>;
  updatedAt?: Maybe<CategoriesDocAccessFields_UpdatedAt>;
};

export type CategoriesDocAccessFields_Breadcrumbs = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs';
  create?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Delete>;
  fields?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Fields>;
  read?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Read>;
  update?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Update>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Create = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Delete = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Fields = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_Fields';
  doc?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Doc>;
  id?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Id>;
  label?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Label>;
  url?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Url>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Read = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Update = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Doc = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_doc';
  create?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Doc_Update>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Doc_Create = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Doc_Read = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Doc_Update = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Id = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_id';
  create?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Id_Read>;
  update?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Id_Update>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Id_Create = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Id_Delete = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Id_Read = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Id_Update = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Label = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_label';
  create?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Label_Read>;
  update?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Label_Update>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Label_Create = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Label_Delete = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Label_Read = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Label_Update = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Url = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_url';
  create?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Url_Read>;
  update?: Maybe<CategoriesDocAccessFields_Breadcrumbs_Url_Update>;
};

export type CategoriesDocAccessFields_Breadcrumbs_Url_Create = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Url_Delete = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Url_Read = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Breadcrumbs_Url_Update = {
  __typename?: 'CategoriesDocAccessFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt = {
  __typename?: 'CategoriesDocAccessFields_createdAt';
  create?: Maybe<CategoriesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_CreatedAt_Update>;
};

export type CategoriesDocAccessFields_CreatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_CreatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Parent = {
  __typename?: 'CategoriesDocAccessFields_parent';
  create?: Maybe<CategoriesDocAccessFields_Parent_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Parent_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Parent_Read>;
  update?: Maybe<CategoriesDocAccessFields_Parent_Update>;
};

export type CategoriesDocAccessFields_Parent_Create = {
  __typename?: 'CategoriesDocAccessFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Parent_Delete = {
  __typename?: 'CategoriesDocAccessFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Parent_Read = {
  __typename?: 'CategoriesDocAccessFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Parent_Update = {
  __typename?: 'CategoriesDocAccessFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Site = {
  __typename?: 'CategoriesDocAccessFields_site';
  create?: Maybe<CategoriesDocAccessFields_Site_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Site_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Site_Read>;
  update?: Maybe<CategoriesDocAccessFields_Site_Update>;
};

export type CategoriesDocAccessFields_Site_Create = {
  __typename?: 'CategoriesDocAccessFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Site_Delete = {
  __typename?: 'CategoriesDocAccessFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Site_Read = {
  __typename?: 'CategoriesDocAccessFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Site_Update = {
  __typename?: 'CategoriesDocAccessFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title = {
  __typename?: 'CategoriesDocAccessFields_title';
  create?: Maybe<CategoriesDocAccessFields_Title_Create>;
  delete?: Maybe<CategoriesDocAccessFields_Title_Delete>;
  read?: Maybe<CategoriesDocAccessFields_Title_Read>;
  update?: Maybe<CategoriesDocAccessFields_Title_Update>;
};

export type CategoriesDocAccessFields_Title_Create = {
  __typename?: 'CategoriesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Delete = {
  __typename?: 'CategoriesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Read = {
  __typename?: 'CategoriesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_Title_Update = {
  __typename?: 'CategoriesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt = {
  __typename?: 'CategoriesDocAccessFields_updatedAt';
  create?: Maybe<CategoriesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesDocAccessFields_UpdatedAt_Update>;
};

export type CategoriesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'CategoriesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields = {
  __typename?: 'CategoriesFields';
  breadcrumbs?: Maybe<CategoriesFields_Breadcrumbs>;
  createdAt?: Maybe<CategoriesFields_CreatedAt>;
  parent?: Maybe<CategoriesFields_Parent>;
  site?: Maybe<CategoriesFields_Site>;
  title?: Maybe<CategoriesFields_Title>;
  updatedAt?: Maybe<CategoriesFields_UpdatedAt>;
};

export type CategoriesFields_Breadcrumbs = {
  __typename?: 'CategoriesFields_breadcrumbs';
  create?: Maybe<CategoriesFields_Breadcrumbs_Create>;
  delete?: Maybe<CategoriesFields_Breadcrumbs_Delete>;
  fields?: Maybe<CategoriesFields_Breadcrumbs_Fields>;
  read?: Maybe<CategoriesFields_Breadcrumbs_Read>;
  update?: Maybe<CategoriesFields_Breadcrumbs_Update>;
};

export type CategoriesFields_Breadcrumbs_Create = {
  __typename?: 'CategoriesFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Delete = {
  __typename?: 'CategoriesFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Fields = {
  __typename?: 'CategoriesFields_breadcrumbs_Fields';
  doc?: Maybe<CategoriesFields_Breadcrumbs_Doc>;
  id?: Maybe<CategoriesFields_Breadcrumbs_Id>;
  label?: Maybe<CategoriesFields_Breadcrumbs_Label>;
  url?: Maybe<CategoriesFields_Breadcrumbs_Url>;
};

export type CategoriesFields_Breadcrumbs_Read = {
  __typename?: 'CategoriesFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Update = {
  __typename?: 'CategoriesFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Doc = {
  __typename?: 'CategoriesFields_breadcrumbs_doc';
  create?: Maybe<CategoriesFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<CategoriesFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<CategoriesFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<CategoriesFields_Breadcrumbs_Doc_Update>;
};

export type CategoriesFields_Breadcrumbs_Doc_Create = {
  __typename?: 'CategoriesFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'CategoriesFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Doc_Read = {
  __typename?: 'CategoriesFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Doc_Update = {
  __typename?: 'CategoriesFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Id = {
  __typename?: 'CategoriesFields_breadcrumbs_id';
  create?: Maybe<CategoriesFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<CategoriesFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<CategoriesFields_Breadcrumbs_Id_Read>;
  update?: Maybe<CategoriesFields_Breadcrumbs_Id_Update>;
};

export type CategoriesFields_Breadcrumbs_Id_Create = {
  __typename?: 'CategoriesFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Id_Delete = {
  __typename?: 'CategoriesFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Id_Read = {
  __typename?: 'CategoriesFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Id_Update = {
  __typename?: 'CategoriesFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Label = {
  __typename?: 'CategoriesFields_breadcrumbs_label';
  create?: Maybe<CategoriesFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<CategoriesFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<CategoriesFields_Breadcrumbs_Label_Read>;
  update?: Maybe<CategoriesFields_Breadcrumbs_Label_Update>;
};

export type CategoriesFields_Breadcrumbs_Label_Create = {
  __typename?: 'CategoriesFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Label_Delete = {
  __typename?: 'CategoriesFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Label_Read = {
  __typename?: 'CategoriesFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Label_Update = {
  __typename?: 'CategoriesFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Url = {
  __typename?: 'CategoriesFields_breadcrumbs_url';
  create?: Maybe<CategoriesFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<CategoriesFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<CategoriesFields_Breadcrumbs_Url_Read>;
  update?: Maybe<CategoriesFields_Breadcrumbs_Url_Update>;
};

export type CategoriesFields_Breadcrumbs_Url_Create = {
  __typename?: 'CategoriesFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Url_Delete = {
  __typename?: 'CategoriesFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Url_Read = {
  __typename?: 'CategoriesFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Breadcrumbs_Url_Update = {
  __typename?: 'CategoriesFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt = {
  __typename?: 'CategoriesFields_createdAt';
  create?: Maybe<CategoriesFields_CreatedAt_Create>;
  delete?: Maybe<CategoriesFields_CreatedAt_Delete>;
  read?: Maybe<CategoriesFields_CreatedAt_Read>;
  update?: Maybe<CategoriesFields_CreatedAt_Update>;
};

export type CategoriesFields_CreatedAt_Create = {
  __typename?: 'CategoriesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Delete = {
  __typename?: 'CategoriesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Read = {
  __typename?: 'CategoriesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_CreatedAt_Update = {
  __typename?: 'CategoriesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Parent = {
  __typename?: 'CategoriesFields_parent';
  create?: Maybe<CategoriesFields_Parent_Create>;
  delete?: Maybe<CategoriesFields_Parent_Delete>;
  read?: Maybe<CategoriesFields_Parent_Read>;
  update?: Maybe<CategoriesFields_Parent_Update>;
};

export type CategoriesFields_Parent_Create = {
  __typename?: 'CategoriesFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Parent_Delete = {
  __typename?: 'CategoriesFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Parent_Read = {
  __typename?: 'CategoriesFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Parent_Update = {
  __typename?: 'CategoriesFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Site = {
  __typename?: 'CategoriesFields_site';
  create?: Maybe<CategoriesFields_Site_Create>;
  delete?: Maybe<CategoriesFields_Site_Delete>;
  read?: Maybe<CategoriesFields_Site_Read>;
  update?: Maybe<CategoriesFields_Site_Update>;
};

export type CategoriesFields_Site_Create = {
  __typename?: 'CategoriesFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Site_Delete = {
  __typename?: 'CategoriesFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Site_Read = {
  __typename?: 'CategoriesFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Site_Update = {
  __typename?: 'CategoriesFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title = {
  __typename?: 'CategoriesFields_title';
  create?: Maybe<CategoriesFields_Title_Create>;
  delete?: Maybe<CategoriesFields_Title_Delete>;
  read?: Maybe<CategoriesFields_Title_Read>;
  update?: Maybe<CategoriesFields_Title_Update>;
};

export type CategoriesFields_Title_Create = {
  __typename?: 'CategoriesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Delete = {
  __typename?: 'CategoriesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Read = {
  __typename?: 'CategoriesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_Title_Update = {
  __typename?: 'CategoriesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt = {
  __typename?: 'CategoriesFields_updatedAt';
  create?: Maybe<CategoriesFields_UpdatedAt_Create>;
  delete?: Maybe<CategoriesFields_UpdatedAt_Delete>;
  read?: Maybe<CategoriesFields_UpdatedAt_Read>;
  update?: Maybe<CategoriesFields_UpdatedAt_Update>;
};

export type CategoriesFields_UpdatedAt_Create = {
  __typename?: 'CategoriesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Delete = {
  __typename?: 'CategoriesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Read = {
  __typename?: 'CategoriesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesFields_UpdatedAt_Update = {
  __typename?: 'CategoriesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type CategoriesReadAccess = {
  __typename?: 'CategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesReadDocAccess = {
  __typename?: 'CategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateAccess = {
  __typename?: 'CategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type CategoriesUpdateDocAccess = {
  __typename?: 'CategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Category = {
  __typename?: 'Category';
  breadcrumbs?: Maybe<Array<Category_Breadcrumbs>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Category>;
  site?: Maybe<Site>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Category_Breadcrumbs = {
  __typename?: 'Category_Breadcrumbs';
  doc?: Maybe<Category>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Category_Breadcrumbs__Doc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Breadcrumbs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Breadcrumbs__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Breadcrumbs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Category_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category_Where = {
  AND?: InputMaybe<Array<InputMaybe<Category_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Category_Where_Or>>>;
  breadcrumbs__doc?: InputMaybe<Category_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Category_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Category_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Category_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  parent?: InputMaybe<Category_Parent_Operator>;
  site?: InputMaybe<Category_Site_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_And = {
  breadcrumbs__doc?: InputMaybe<Category_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Category_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Category_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Category_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  parent?: InputMaybe<Category_Parent_Operator>;
  site?: InputMaybe<Category_Site_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Category_Where_Or = {
  breadcrumbs__doc?: InputMaybe<Category_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Category_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Category_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Category_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Category_CreatedAt_Operator>;
  id?: InputMaybe<Category_Id_Operator>;
  parent?: InputMaybe<Category_Parent_Operator>;
  site?: InputMaybe<Category_Site_Operator>;
  title?: InputMaybe<Category_Title_Operator>;
  updatedAt?: InputMaybe<Category_UpdatedAt_Operator>;
};

export type Checkbox = {
  __typename?: 'Checkbox';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Content = {
  __typename?: 'Content';
  backgroundColor?: Maybe<Content_BackgroundColor>;
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  columns?: Maybe<Array<Content_Columns>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type Content_Columns = {
  __typename?: 'Content_Columns';
  enableLink?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Content_Columns_Link>;
  richText?: Maybe<Scalars['JSON']['output']>;
  size?: Maybe<Content_Columns_Size>;
};

export type Content_ColumnsRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Content_Columns_Link = {
  __typename?: 'Content_Columns_Link';
  appearance?: Maybe<Content_Columns_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Content_Columns_Link_Reference_Relationship>;
  type?: Maybe<Content_Columns_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Content_Columns_Link_Reference = Page;

export enum Content_Columns_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type Content_Columns_Link_Reference_Relationship = {
  __typename?: 'Content_Columns_Link_Reference_Relationship';
  relationTo?: Maybe<Content_Columns_Link_Reference_RelationTo>;
  value?: Maybe<Content_Columns_Link_Reference>;
};

export enum Content_Columns_Link_Appearance {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Content_Columns_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export enum Content_Columns_Size {
  Full = 'full',
  Half = 'half',
  OneThird = 'oneThird',
  TwoThirds = 'twoThirds',
}

export enum Content_BackgroundColor {
  Black = 'black',
  White = 'white',
}

export type Country = {
  __typename?: 'Country';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Email = {
  __typename?: 'Email';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Form = {
  __typename?: 'Form';
  confirmationMessage?: Maybe<Scalars['JSON']['output']>;
  confirmationType?: Maybe<Form_ConfirmationType>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  emails?: Maybe<Array<Form_Emails>>;
  fields?: Maybe<Array<Form_Fields>>;
  id?: Maybe<Scalars['String']['output']>;
  redirect?: Maybe<Form_Redirect>;
  submitButtonLabel?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormConfirmationMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type FormSubmission = {
  __typename?: 'FormSubmission';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  form: Form;
  id?: Maybe<Scalars['String']['output']>;
  submissionData?: Maybe<Array<FormSubmission_SubmissionData>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type FormSubmission_SubmissionData = {
  __typename?: 'FormSubmission_SubmissionData';
  field?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type FormSubmission_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FormSubmission_Form_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_SubmissionData__Field_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_SubmissionData__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_SubmissionData__Value_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FormSubmission_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FormSubmission_Where = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>;
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmission_Where_And = {
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmission_Where_Or = {
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>;
  form?: InputMaybe<FormSubmission_Form_Operator>;
  id?: InputMaybe<FormSubmission_Id_Operator>;
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>;
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>;
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>;
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>;
};

export type FormSubmissions = {
  __typename?: 'FormSubmissions';
  docs?: Maybe<Array<Maybe<FormSubmission>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FormSubmissionsCreateAccess = {
  __typename?: 'FormSubmissionsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsCreateDocAccess = {
  __typename?: 'FormSubmissionsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteAccess = {
  __typename?: 'FormSubmissionsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDeleteDocAccess = {
  __typename?: 'FormSubmissionsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsDocAccessFields = {
  __typename?: 'FormSubmissionsDocAccessFields';
  createdAt?: Maybe<FormSubmissionsDocAccessFields_CreatedAt>;
  form?: Maybe<FormSubmissionsDocAccessFields_Form>;
  submissionData?: Maybe<FormSubmissionsDocAccessFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt>;
};

export type FormSubmissionsDocAccessFields_CreatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt';
  create?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form = {
  __typename?: 'FormSubmissionsDocAccessFields_form';
  create?: Maybe<FormSubmissionsDocAccessFields_Form_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_Form_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_Form_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_Form_Update>;
};

export type FormSubmissionsDocAccessFields_Form_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_Form_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Fields';
  field?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value';
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt';
  create?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Update>;
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields = {
  __typename?: 'FormSubmissionsFields';
  createdAt?: Maybe<FormSubmissionsFields_CreatedAt>;
  form?: Maybe<FormSubmissionsFields_Form>;
  submissionData?: Maybe<FormSubmissionsFields_SubmissionData>;
  updatedAt?: Maybe<FormSubmissionsFields_UpdatedAt>;
};

export type FormSubmissionsFields_CreatedAt = {
  __typename?: 'FormSubmissionsFields_createdAt';
  create?: Maybe<FormSubmissionsFields_CreatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_CreatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_CreatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_CreatedAt_Update>;
};

export type FormSubmissionsFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form = {
  __typename?: 'FormSubmissionsFields_form';
  create?: Maybe<FormSubmissionsFields_Form_Create>;
  delete?: Maybe<FormSubmissionsFields_Form_Delete>;
  read?: Maybe<FormSubmissionsFields_Form_Read>;
  update?: Maybe<FormSubmissionsFields_Form_Update>;
};

export type FormSubmissionsFields_Form_Create = {
  __typename?: 'FormSubmissionsFields_form_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Delete = {
  __typename?: 'FormSubmissionsFields_form_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Read = {
  __typename?: 'FormSubmissionsFields_form_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_Form_Update = {
  __typename?: 'FormSubmissionsFields_form_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData = {
  __typename?: 'FormSubmissionsFields_submissionData';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Delete>;
  fields?: Maybe<FormSubmissionsFields_SubmissionData_Fields>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Update>;
};

export type FormSubmissionsFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsFields_submissionData_Fields';
  field?: Maybe<FormSubmissionsFields_SubmissionData_Field>;
  id?: Maybe<FormSubmissionsFields_SubmissionData_Id>;
  value?: Maybe<FormSubmissionsFields_SubmissionData_Value>;
};

export type FormSubmissionsFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsFields_submissionData_field';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Field_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Field_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Field_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Field_Update>;
};

export type FormSubmissionsFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsFields_submissionData_id';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Id_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Id_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Id_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Id_Update>;
};

export type FormSubmissionsFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsFields_submissionData_value';
  create?: Maybe<FormSubmissionsFields_SubmissionData_Value_Create>;
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Value_Delete>;
  read?: Maybe<FormSubmissionsFields_SubmissionData_Value_Read>;
  update?: Maybe<FormSubmissionsFields_SubmissionData_Value_Update>;
};

export type FormSubmissionsFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt = {
  __typename?: 'FormSubmissionsFields_updatedAt';
  create?: Maybe<FormSubmissionsFields_UpdatedAt_Create>;
  delete?: Maybe<FormSubmissionsFields_UpdatedAt_Delete>;
  read?: Maybe<FormSubmissionsFields_UpdatedAt_Read>;
  update?: Maybe<FormSubmissionsFields_UpdatedAt_Update>;
};

export type FormSubmissionsFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormSubmissionsReadAccess = {
  __typename?: 'FormSubmissionsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsReadDocAccess = {
  __typename?: 'FormSubmissionsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateAccess = {
  __typename?: 'FormSubmissionsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormSubmissionsUpdateDocAccess = {
  __typename?: 'FormSubmissionsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Form_Emails = {
  __typename?: 'Form_Emails';
  bcc?: Maybe<Scalars['String']['output']>;
  cc?: Maybe<Scalars['String']['output']>;
  emailFrom?: Maybe<Scalars['String']['output']>;
  emailTo?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
  replyTo?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
};

export type Form_EmailsMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Form_Fields =
  | Checkbox
  | Country
  | Email
  | Message
  | Number
  | Select
  | State
  | Text
  | Textarea;

export type Form_Redirect = {
  __typename?: 'Form_Redirect';
  url?: Maybe<Scalars['String']['output']>;
};

export type Form_ConfirmationMessage_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Form_ConfirmationType {
  Message = 'message',
  Redirect = 'redirect',
}

export enum Form_ConfirmationType_Input {
  Message = 'message',
  Redirect = 'redirect',
}

export type Form_ConfirmationType_Operator = {
  contains?: InputMaybe<Form_ConfirmationType_Input>;
  equals?: InputMaybe<Form_ConfirmationType_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Form_ConfirmationType_Input>;
  not_equals?: InputMaybe<Form_ConfirmationType_Input>;
};

export type Form_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Form_Emails__Bcc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Cc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__EmailFrom_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__EmailTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Message_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Form_Emails__ReplyTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Emails__Subject_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Redirect__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_SubmitButtonLabel_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Form_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Form_Where = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>;
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Form_Where_And = {
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Form_Where_Or = {
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>;
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>;
  createdAt?: InputMaybe<Form_CreatedAt_Operator>;
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>;
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>;
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>;
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>;
  emails__id?: InputMaybe<Form_Emails__Id_Operator>;
  emails__message?: InputMaybe<Form_Emails__Message_Operator>;
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>;
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>;
  id?: InputMaybe<Form_Id_Operator>;
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>;
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>;
  title?: InputMaybe<Form_Title_Operator>;
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>;
};

export type Forms = {
  __typename?: 'Forms';
  docs?: Maybe<Array<Maybe<Form>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type FormsCreateAccess = {
  __typename?: 'FormsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsCreateDocAccess = {
  __typename?: 'FormsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteAccess = {
  __typename?: 'FormsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDeleteDocAccess = {
  __typename?: 'FormsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsDocAccessFields = {
  __typename?: 'FormsDocAccessFields';
  confirmationMessage?: Maybe<FormsDocAccessFields_ConfirmationMessage>;
  confirmationType?: Maybe<FormsDocAccessFields_ConfirmationType>;
  createdAt?: Maybe<FormsDocAccessFields_CreatedAt>;
  emails?: Maybe<FormsDocAccessFields_Emails>;
  fields?: Maybe<FormsDocAccessFields_Fields>;
  redirect?: Maybe<FormsDocAccessFields_Redirect>;
  submitButtonLabel?: Maybe<FormsDocAccessFields_SubmitButtonLabel>;
  title?: Maybe<FormsDocAccessFields_Title>;
  updatedAt?: Maybe<FormsDocAccessFields_UpdatedAt>;
};

export type FormsDocAccessFields_ConfirmationMessage = {
  __typename?: 'FormsDocAccessFields_confirmationMessage';
  create?: Maybe<FormsDocAccessFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationMessage_Update>;
};

export type FormsDocAccessFields_ConfirmationMessage_Create = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Read = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationMessage_Update = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType = {
  __typename?: 'FormsDocAccessFields_confirmationType';
  create?: Maybe<FormsDocAccessFields_ConfirmationType_Create>;
  delete?: Maybe<FormsDocAccessFields_ConfirmationType_Delete>;
  read?: Maybe<FormsDocAccessFields_ConfirmationType_Read>;
  update?: Maybe<FormsDocAccessFields_ConfirmationType_Update>;
};

export type FormsDocAccessFields_ConfirmationType_Create = {
  __typename?: 'FormsDocAccessFields_confirmationType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Read = {
  __typename?: 'FormsDocAccessFields_confirmationType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_ConfirmationType_Update = {
  __typename?: 'FormsDocAccessFields_confirmationType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt = {
  __typename?: 'FormsDocAccessFields_createdAt';
  create?: Maybe<FormsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_CreatedAt_Update>;
};

export type FormsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails = {
  __typename?: 'FormsDocAccessFields_emails';
  create?: Maybe<FormsDocAccessFields_Emails_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Delete>;
  fields?: Maybe<FormsDocAccessFields_Emails_Fields>;
  read?: Maybe<FormsDocAccessFields_Emails_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Update>;
};

export type FormsDocAccessFields_Emails_Create = {
  __typename?: 'FormsDocAccessFields_emails_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Delete = {
  __typename?: 'FormsDocAccessFields_emails_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Fields = {
  __typename?: 'FormsDocAccessFields_emails_Fields';
  bcc?: Maybe<FormsDocAccessFields_Emails_Bcc>;
  cc?: Maybe<FormsDocAccessFields_Emails_Cc>;
  emailFrom?: Maybe<FormsDocAccessFields_Emails_EmailFrom>;
  emailTo?: Maybe<FormsDocAccessFields_Emails_EmailTo>;
  id?: Maybe<FormsDocAccessFields_Emails_Id>;
  message?: Maybe<FormsDocAccessFields_Emails_Message>;
  replyTo?: Maybe<FormsDocAccessFields_Emails_ReplyTo>;
  subject?: Maybe<FormsDocAccessFields_Emails_Subject>;
};

export type FormsDocAccessFields_Emails_Read = {
  __typename?: 'FormsDocAccessFields_emails_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Update = {
  __typename?: 'FormsDocAccessFields_emails_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc = {
  __typename?: 'FormsDocAccessFields_emails_bcc';
  create?: Maybe<FormsDocAccessFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Bcc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Bcc_Update>;
};

export type FormsDocAccessFields_Emails_Bcc_Create = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Read = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Bcc_Update = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc = {
  __typename?: 'FormsDocAccessFields_emails_cc';
  create?: Maybe<FormsDocAccessFields_Emails_Cc_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Cc_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Cc_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Cc_Update>;
};

export type FormsDocAccessFields_Emails_Cc_Create = {
  __typename?: 'FormsDocAccessFields_emails_cc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_cc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Read = {
  __typename?: 'FormsDocAccessFields_emails_cc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Cc_Update = {
  __typename?: 'FormsDocAccessFields_emails_cc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom';
  create?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Update>;
};

export type FormsDocAccessFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo = {
  __typename?: 'FormsDocAccessFields_emails_emailTo';
  create?: Maybe<FormsDocAccessFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_EmailTo_Update>;
};

export type FormsDocAccessFields_Emails_EmailTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_EmailTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id = {
  __typename?: 'FormsDocAccessFields_emails_id';
  create?: Maybe<FormsDocAccessFields_Emails_Id_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Id_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Id_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Id_Update>;
};

export type FormsDocAccessFields_Emails_Id_Create = {
  __typename?: 'FormsDocAccessFields_emails_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Delete = {
  __typename?: 'FormsDocAccessFields_emails_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Read = {
  __typename?: 'FormsDocAccessFields_emails_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Id_Update = {
  __typename?: 'FormsDocAccessFields_emails_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message = {
  __typename?: 'FormsDocAccessFields_emails_message';
  create?: Maybe<FormsDocAccessFields_Emails_Message_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Message_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Message_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Message_Update>;
};

export type FormsDocAccessFields_Emails_Message_Create = {
  __typename?: 'FormsDocAccessFields_emails_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Delete = {
  __typename?: 'FormsDocAccessFields_emails_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Read = {
  __typename?: 'FormsDocAccessFields_emails_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Message_Update = {
  __typename?: 'FormsDocAccessFields_emails_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo = {
  __typename?: 'FormsDocAccessFields_emails_replyTo';
  create?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Update>;
};

export type FormsDocAccessFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject = {
  __typename?: 'FormsDocAccessFields_emails_subject';
  create?: Maybe<FormsDocAccessFields_Emails_Subject_Create>;
  delete?: Maybe<FormsDocAccessFields_Emails_Subject_Delete>;
  read?: Maybe<FormsDocAccessFields_Emails_Subject_Read>;
  update?: Maybe<FormsDocAccessFields_Emails_Subject_Update>;
};

export type FormsDocAccessFields_Emails_Subject_Create = {
  __typename?: 'FormsDocAccessFields_emails_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Delete = {
  __typename?: 'FormsDocAccessFields_emails_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Read = {
  __typename?: 'FormsDocAccessFields_emails_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Emails_Subject_Update = {
  __typename?: 'FormsDocAccessFields_emails_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields = {
  __typename?: 'FormsDocAccessFields_fields';
  create?: Maybe<FormsDocAccessFields_Fields_Create>;
  delete?: Maybe<FormsDocAccessFields_Fields_Delete>;
  read?: Maybe<FormsDocAccessFields_Fields_Read>;
  update?: Maybe<FormsDocAccessFields_Fields_Update>;
};

export type FormsDocAccessFields_Fields_Create = {
  __typename?: 'FormsDocAccessFields_fields_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Delete = {
  __typename?: 'FormsDocAccessFields_fields_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Read = {
  __typename?: 'FormsDocAccessFields_fields_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Fields_Update = {
  __typename?: 'FormsDocAccessFields_fields_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect = {
  __typename?: 'FormsDocAccessFields_redirect';
  create?: Maybe<FormsDocAccessFields_Redirect_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Delete>;
  fields?: Maybe<FormsDocAccessFields_Redirect_Fields>;
  read?: Maybe<FormsDocAccessFields_Redirect_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Update>;
};

export type FormsDocAccessFields_Redirect_Create = {
  __typename?: 'FormsDocAccessFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Fields = {
  __typename?: 'FormsDocAccessFields_redirect_Fields';
  url?: Maybe<FormsDocAccessFields_Redirect_Url>;
};

export type FormsDocAccessFields_Redirect_Read = {
  __typename?: 'FormsDocAccessFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Update = {
  __typename?: 'FormsDocAccessFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url = {
  __typename?: 'FormsDocAccessFields_redirect_url';
  create?: Maybe<FormsDocAccessFields_Redirect_Url_Create>;
  delete?: Maybe<FormsDocAccessFields_Redirect_Url_Delete>;
  read?: Maybe<FormsDocAccessFields_Redirect_Url_Read>;
  update?: Maybe<FormsDocAccessFields_Redirect_Url_Update>;
};

export type FormsDocAccessFields_Redirect_Url_Create = {
  __typename?: 'FormsDocAccessFields_redirect_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Read = {
  __typename?: 'FormsDocAccessFields_redirect_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Redirect_Url_Update = {
  __typename?: 'FormsDocAccessFields_redirect_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel';
  create?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Update>;
};

export type FormsDocAccessFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title = {
  __typename?: 'FormsDocAccessFields_title';
  create?: Maybe<FormsDocAccessFields_Title_Create>;
  delete?: Maybe<FormsDocAccessFields_Title_Delete>;
  read?: Maybe<FormsDocAccessFields_Title_Read>;
  update?: Maybe<FormsDocAccessFields_Title_Update>;
};

export type FormsDocAccessFields_Title_Create = {
  __typename?: 'FormsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Delete = {
  __typename?: 'FormsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Read = {
  __typename?: 'FormsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_Title_Update = {
  __typename?: 'FormsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt = {
  __typename?: 'FormsDocAccessFields_updatedAt';
  create?: Maybe<FormsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<FormsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<FormsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<FormsDocAccessFields_UpdatedAt_Update>;
};

export type FormsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields = {
  __typename?: 'FormsFields';
  confirmationMessage?: Maybe<FormsFields_ConfirmationMessage>;
  confirmationType?: Maybe<FormsFields_ConfirmationType>;
  createdAt?: Maybe<FormsFields_CreatedAt>;
  emails?: Maybe<FormsFields_Emails>;
  fields?: Maybe<FormsFields_Fields>;
  redirect?: Maybe<FormsFields_Redirect>;
  submitButtonLabel?: Maybe<FormsFields_SubmitButtonLabel>;
  title?: Maybe<FormsFields_Title>;
  updatedAt?: Maybe<FormsFields_UpdatedAt>;
};

export type FormsFields_ConfirmationMessage = {
  __typename?: 'FormsFields_confirmationMessage';
  create?: Maybe<FormsFields_ConfirmationMessage_Create>;
  delete?: Maybe<FormsFields_ConfirmationMessage_Delete>;
  read?: Maybe<FormsFields_ConfirmationMessage_Read>;
  update?: Maybe<FormsFields_ConfirmationMessage_Update>;
};

export type FormsFields_ConfirmationMessage_Create = {
  __typename?: 'FormsFields_confirmationMessage_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsFields_confirmationMessage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Read = {
  __typename?: 'FormsFields_confirmationMessage_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationMessage_Update = {
  __typename?: 'FormsFields_confirmationMessage_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType = {
  __typename?: 'FormsFields_confirmationType';
  create?: Maybe<FormsFields_ConfirmationType_Create>;
  delete?: Maybe<FormsFields_ConfirmationType_Delete>;
  read?: Maybe<FormsFields_ConfirmationType_Read>;
  update?: Maybe<FormsFields_ConfirmationType_Update>;
};

export type FormsFields_ConfirmationType_Create = {
  __typename?: 'FormsFields_confirmationType_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Delete = {
  __typename?: 'FormsFields_confirmationType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Read = {
  __typename?: 'FormsFields_confirmationType_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_ConfirmationType_Update = {
  __typename?: 'FormsFields_confirmationType_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt = {
  __typename?: 'FormsFields_createdAt';
  create?: Maybe<FormsFields_CreatedAt_Create>;
  delete?: Maybe<FormsFields_CreatedAt_Delete>;
  read?: Maybe<FormsFields_CreatedAt_Read>;
  update?: Maybe<FormsFields_CreatedAt_Update>;
};

export type FormsFields_CreatedAt_Create = {
  __typename?: 'FormsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Delete = {
  __typename?: 'FormsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Read = {
  __typename?: 'FormsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_CreatedAt_Update = {
  __typename?: 'FormsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails = {
  __typename?: 'FormsFields_emails';
  create?: Maybe<FormsFields_Emails_Create>;
  delete?: Maybe<FormsFields_Emails_Delete>;
  fields?: Maybe<FormsFields_Emails_Fields>;
  read?: Maybe<FormsFields_Emails_Read>;
  update?: Maybe<FormsFields_Emails_Update>;
};

export type FormsFields_Emails_Create = {
  __typename?: 'FormsFields_emails_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Delete = {
  __typename?: 'FormsFields_emails_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Fields = {
  __typename?: 'FormsFields_emails_Fields';
  bcc?: Maybe<FormsFields_Emails_Bcc>;
  cc?: Maybe<FormsFields_Emails_Cc>;
  emailFrom?: Maybe<FormsFields_Emails_EmailFrom>;
  emailTo?: Maybe<FormsFields_Emails_EmailTo>;
  id?: Maybe<FormsFields_Emails_Id>;
  message?: Maybe<FormsFields_Emails_Message>;
  replyTo?: Maybe<FormsFields_Emails_ReplyTo>;
  subject?: Maybe<FormsFields_Emails_Subject>;
};

export type FormsFields_Emails_Read = {
  __typename?: 'FormsFields_emails_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Update = {
  __typename?: 'FormsFields_emails_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc = {
  __typename?: 'FormsFields_emails_bcc';
  create?: Maybe<FormsFields_Emails_Bcc_Create>;
  delete?: Maybe<FormsFields_Emails_Bcc_Delete>;
  read?: Maybe<FormsFields_Emails_Bcc_Read>;
  update?: Maybe<FormsFields_Emails_Bcc_Update>;
};

export type FormsFields_Emails_Bcc_Create = {
  __typename?: 'FormsFields_emails_bcc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Delete = {
  __typename?: 'FormsFields_emails_bcc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Read = {
  __typename?: 'FormsFields_emails_bcc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Bcc_Update = {
  __typename?: 'FormsFields_emails_bcc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc = {
  __typename?: 'FormsFields_emails_cc';
  create?: Maybe<FormsFields_Emails_Cc_Create>;
  delete?: Maybe<FormsFields_Emails_Cc_Delete>;
  read?: Maybe<FormsFields_Emails_Cc_Read>;
  update?: Maybe<FormsFields_Emails_Cc_Update>;
};

export type FormsFields_Emails_Cc_Create = {
  __typename?: 'FormsFields_emails_cc_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Delete = {
  __typename?: 'FormsFields_emails_cc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Read = {
  __typename?: 'FormsFields_emails_cc_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Cc_Update = {
  __typename?: 'FormsFields_emails_cc_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom = {
  __typename?: 'FormsFields_emails_emailFrom';
  create?: Maybe<FormsFields_Emails_EmailFrom_Create>;
  delete?: Maybe<FormsFields_Emails_EmailFrom_Delete>;
  read?: Maybe<FormsFields_Emails_EmailFrom_Read>;
  update?: Maybe<FormsFields_Emails_EmailFrom_Update>;
};

export type FormsFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsFields_emails_emailFrom_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsFields_emails_emailFrom_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsFields_emails_emailFrom_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsFields_emails_emailFrom_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo = {
  __typename?: 'FormsFields_emails_emailTo';
  create?: Maybe<FormsFields_Emails_EmailTo_Create>;
  delete?: Maybe<FormsFields_Emails_EmailTo_Delete>;
  read?: Maybe<FormsFields_Emails_EmailTo_Read>;
  update?: Maybe<FormsFields_Emails_EmailTo_Update>;
};

export type FormsFields_Emails_EmailTo_Create = {
  __typename?: 'FormsFields_emails_emailTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsFields_emails_emailTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Read = {
  __typename?: 'FormsFields_emails_emailTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_EmailTo_Update = {
  __typename?: 'FormsFields_emails_emailTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id = {
  __typename?: 'FormsFields_emails_id';
  create?: Maybe<FormsFields_Emails_Id_Create>;
  delete?: Maybe<FormsFields_Emails_Id_Delete>;
  read?: Maybe<FormsFields_Emails_Id_Read>;
  update?: Maybe<FormsFields_Emails_Id_Update>;
};

export type FormsFields_Emails_Id_Create = {
  __typename?: 'FormsFields_emails_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Delete = {
  __typename?: 'FormsFields_emails_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Read = {
  __typename?: 'FormsFields_emails_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Id_Update = {
  __typename?: 'FormsFields_emails_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message = {
  __typename?: 'FormsFields_emails_message';
  create?: Maybe<FormsFields_Emails_Message_Create>;
  delete?: Maybe<FormsFields_Emails_Message_Delete>;
  read?: Maybe<FormsFields_Emails_Message_Read>;
  update?: Maybe<FormsFields_Emails_Message_Update>;
};

export type FormsFields_Emails_Message_Create = {
  __typename?: 'FormsFields_emails_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Delete = {
  __typename?: 'FormsFields_emails_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Read = {
  __typename?: 'FormsFields_emails_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Message_Update = {
  __typename?: 'FormsFields_emails_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo = {
  __typename?: 'FormsFields_emails_replyTo';
  create?: Maybe<FormsFields_Emails_ReplyTo_Create>;
  delete?: Maybe<FormsFields_Emails_ReplyTo_Delete>;
  read?: Maybe<FormsFields_Emails_ReplyTo_Read>;
  update?: Maybe<FormsFields_Emails_ReplyTo_Update>;
};

export type FormsFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsFields_emails_replyTo_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsFields_emails_replyTo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsFields_emails_replyTo_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsFields_emails_replyTo_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject = {
  __typename?: 'FormsFields_emails_subject';
  create?: Maybe<FormsFields_Emails_Subject_Create>;
  delete?: Maybe<FormsFields_Emails_Subject_Delete>;
  read?: Maybe<FormsFields_Emails_Subject_Read>;
  update?: Maybe<FormsFields_Emails_Subject_Update>;
};

export type FormsFields_Emails_Subject_Create = {
  __typename?: 'FormsFields_emails_subject_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Delete = {
  __typename?: 'FormsFields_emails_subject_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Read = {
  __typename?: 'FormsFields_emails_subject_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Emails_Subject_Update = {
  __typename?: 'FormsFields_emails_subject_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields = {
  __typename?: 'FormsFields_fields';
  create?: Maybe<FormsFields_Fields_Create>;
  delete?: Maybe<FormsFields_Fields_Delete>;
  read?: Maybe<FormsFields_Fields_Read>;
  update?: Maybe<FormsFields_Fields_Update>;
};

export type FormsFields_Fields_Create = {
  __typename?: 'FormsFields_fields_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Delete = {
  __typename?: 'FormsFields_fields_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Read = {
  __typename?: 'FormsFields_fields_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Fields_Update = {
  __typename?: 'FormsFields_fields_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect = {
  __typename?: 'FormsFields_redirect';
  create?: Maybe<FormsFields_Redirect_Create>;
  delete?: Maybe<FormsFields_Redirect_Delete>;
  fields?: Maybe<FormsFields_Redirect_Fields>;
  read?: Maybe<FormsFields_Redirect_Read>;
  update?: Maybe<FormsFields_Redirect_Update>;
};

export type FormsFields_Redirect_Create = {
  __typename?: 'FormsFields_redirect_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Delete = {
  __typename?: 'FormsFields_redirect_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Fields = {
  __typename?: 'FormsFields_redirect_Fields';
  url?: Maybe<FormsFields_Redirect_Url>;
};

export type FormsFields_Redirect_Read = {
  __typename?: 'FormsFields_redirect_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Update = {
  __typename?: 'FormsFields_redirect_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url = {
  __typename?: 'FormsFields_redirect_url';
  create?: Maybe<FormsFields_Redirect_Url_Create>;
  delete?: Maybe<FormsFields_Redirect_Url_Delete>;
  read?: Maybe<FormsFields_Redirect_Url_Read>;
  update?: Maybe<FormsFields_Redirect_Url_Update>;
};

export type FormsFields_Redirect_Url_Create = {
  __typename?: 'FormsFields_redirect_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Delete = {
  __typename?: 'FormsFields_redirect_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Read = {
  __typename?: 'FormsFields_redirect_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Redirect_Url_Update = {
  __typename?: 'FormsFields_redirect_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel = {
  __typename?: 'FormsFields_submitButtonLabel';
  create?: Maybe<FormsFields_SubmitButtonLabel_Create>;
  delete?: Maybe<FormsFields_SubmitButtonLabel_Delete>;
  read?: Maybe<FormsFields_SubmitButtonLabel_Read>;
  update?: Maybe<FormsFields_SubmitButtonLabel_Update>;
};

export type FormsFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsFields_submitButtonLabel_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsFields_submitButtonLabel_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsFields_submitButtonLabel_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsFields_submitButtonLabel_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title = {
  __typename?: 'FormsFields_title';
  create?: Maybe<FormsFields_Title_Create>;
  delete?: Maybe<FormsFields_Title_Delete>;
  read?: Maybe<FormsFields_Title_Read>;
  update?: Maybe<FormsFields_Title_Update>;
};

export type FormsFields_Title_Create = {
  __typename?: 'FormsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Delete = {
  __typename?: 'FormsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Read = {
  __typename?: 'FormsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_Title_Update = {
  __typename?: 'FormsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt = {
  __typename?: 'FormsFields_updatedAt';
  create?: Maybe<FormsFields_UpdatedAt_Create>;
  delete?: Maybe<FormsFields_UpdatedAt_Delete>;
  read?: Maybe<FormsFields_UpdatedAt_Read>;
  update?: Maybe<FormsFields_UpdatedAt_Update>;
};

export type FormsFields_UpdatedAt_Create = {
  __typename?: 'FormsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Delete = {
  __typename?: 'FormsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Read = {
  __typename?: 'FormsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type FormsFields_UpdatedAt_Update = {
  __typename?: 'FormsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type FormsReadAccess = {
  __typename?: 'FormsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsReadDocAccess = {
  __typename?: 'FormsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateAccess = {
  __typename?: 'FormsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type FormsUpdateDocAccess = {
  __typename?: 'FormsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPage = {
  __typename?: 'LandingPage';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Array<LandingPage_Layout>>;
  site?: Maybe<Site>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type LandingPageCreateAccess = {
  __typename?: 'LandingPageCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageCreateDocAccess = {
  __typename?: 'LandingPageCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageDeleteAccess = {
  __typename?: 'LandingPageDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageDeleteDocAccess = {
  __typename?: 'LandingPageDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageDocAccessFields = {
  __typename?: 'LandingPageDocAccessFields';
  createdAt?: Maybe<LandingPageDocAccessFields_CreatedAt>;
  layout?: Maybe<LandingPageDocAccessFields_Layout>;
  site?: Maybe<LandingPageDocAccessFields_Site>;
  updatedAt?: Maybe<LandingPageDocAccessFields_UpdatedAt>;
};

export type LandingPageDocAccessFields_CreatedAt = {
  __typename?: 'LandingPageDocAccessFields_createdAt';
  create?: Maybe<LandingPageDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<LandingPageDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<LandingPageDocAccessFields_CreatedAt_Read>;
  update?: Maybe<LandingPageDocAccessFields_CreatedAt_Update>;
};

export type LandingPageDocAccessFields_CreatedAt_Create = {
  __typename?: 'LandingPageDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_CreatedAt_Delete = {
  __typename?: 'LandingPageDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_CreatedAt_Read = {
  __typename?: 'LandingPageDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_CreatedAt_Update = {
  __typename?: 'LandingPageDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Layout = {
  __typename?: 'LandingPageDocAccessFields_layout';
  create?: Maybe<LandingPageDocAccessFields_Layout_Create>;
  delete?: Maybe<LandingPageDocAccessFields_Layout_Delete>;
  read?: Maybe<LandingPageDocAccessFields_Layout_Read>;
  update?: Maybe<LandingPageDocAccessFields_Layout_Update>;
};

export type LandingPageDocAccessFields_Layout_Create = {
  __typename?: 'LandingPageDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Layout_Delete = {
  __typename?: 'LandingPageDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Layout_Read = {
  __typename?: 'LandingPageDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Layout_Update = {
  __typename?: 'LandingPageDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Site = {
  __typename?: 'LandingPageDocAccessFields_site';
  create?: Maybe<LandingPageDocAccessFields_Site_Create>;
  delete?: Maybe<LandingPageDocAccessFields_Site_Delete>;
  read?: Maybe<LandingPageDocAccessFields_Site_Read>;
  update?: Maybe<LandingPageDocAccessFields_Site_Update>;
};

export type LandingPageDocAccessFields_Site_Create = {
  __typename?: 'LandingPageDocAccessFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Site_Delete = {
  __typename?: 'LandingPageDocAccessFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Site_Read = {
  __typename?: 'LandingPageDocAccessFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_Site_Update = {
  __typename?: 'LandingPageDocAccessFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_UpdatedAt = {
  __typename?: 'LandingPageDocAccessFields_updatedAt';
  create?: Maybe<LandingPageDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<LandingPageDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<LandingPageDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<LandingPageDocAccessFields_UpdatedAt_Update>;
};

export type LandingPageDocAccessFields_UpdatedAt_Create = {
  __typename?: 'LandingPageDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'LandingPageDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_UpdatedAt_Read = {
  __typename?: 'LandingPageDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageDocAccessFields_UpdatedAt_Update = {
  __typename?: 'LandingPageDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields = {
  __typename?: 'LandingPageFields';
  createdAt?: Maybe<LandingPageFields_CreatedAt>;
  layout?: Maybe<LandingPageFields_Layout>;
  site?: Maybe<LandingPageFields_Site>;
  updatedAt?: Maybe<LandingPageFields_UpdatedAt>;
};

export type LandingPageFields_CreatedAt = {
  __typename?: 'LandingPageFields_createdAt';
  create?: Maybe<LandingPageFields_CreatedAt_Create>;
  delete?: Maybe<LandingPageFields_CreatedAt_Delete>;
  read?: Maybe<LandingPageFields_CreatedAt_Read>;
  update?: Maybe<LandingPageFields_CreatedAt_Update>;
};

export type LandingPageFields_CreatedAt_Create = {
  __typename?: 'LandingPageFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_CreatedAt_Delete = {
  __typename?: 'LandingPageFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_CreatedAt_Read = {
  __typename?: 'LandingPageFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_CreatedAt_Update = {
  __typename?: 'LandingPageFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Layout = {
  __typename?: 'LandingPageFields_layout';
  create?: Maybe<LandingPageFields_Layout_Create>;
  delete?: Maybe<LandingPageFields_Layout_Delete>;
  read?: Maybe<LandingPageFields_Layout_Read>;
  update?: Maybe<LandingPageFields_Layout_Update>;
};

export type LandingPageFields_Layout_Create = {
  __typename?: 'LandingPageFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Layout_Delete = {
  __typename?: 'LandingPageFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Layout_Read = {
  __typename?: 'LandingPageFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Layout_Update = {
  __typename?: 'LandingPageFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Site = {
  __typename?: 'LandingPageFields_site';
  create?: Maybe<LandingPageFields_Site_Create>;
  delete?: Maybe<LandingPageFields_Site_Delete>;
  read?: Maybe<LandingPageFields_Site_Read>;
  update?: Maybe<LandingPageFields_Site_Update>;
};

export type LandingPageFields_Site_Create = {
  __typename?: 'LandingPageFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Site_Delete = {
  __typename?: 'LandingPageFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Site_Read = {
  __typename?: 'LandingPageFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_Site_Update = {
  __typename?: 'LandingPageFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_UpdatedAt = {
  __typename?: 'LandingPageFields_updatedAt';
  create?: Maybe<LandingPageFields_UpdatedAt_Create>;
  delete?: Maybe<LandingPageFields_UpdatedAt_Delete>;
  read?: Maybe<LandingPageFields_UpdatedAt_Read>;
  update?: Maybe<LandingPageFields_UpdatedAt_Update>;
};

export type LandingPageFields_UpdatedAt_Create = {
  __typename?: 'LandingPageFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_UpdatedAt_Delete = {
  __typename?: 'LandingPageFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_UpdatedAt_Read = {
  __typename?: 'LandingPageFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageFields_UpdatedAt_Update = {
  __typename?: 'LandingPageFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type LandingPageReadAccess = {
  __typename?: 'LandingPageReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageReadDocAccess = {
  __typename?: 'LandingPageReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageUpdateAccess = {
  __typename?: 'LandingPageUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPageUpdateDocAccess = {
  __typename?: 'LandingPageUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type LandingPage_Layout =
  | ACallToActionBlock
  | AConsultationSectionBlock
  | AFooterBlock
  | AFormBlock
  | AHeaderBlock
  | AListSectionBlock
  | ASectionWithImageBlock
  | Archive
  | MediaBlock;

export type LandingPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingPage_Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandingPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type LandingPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<LandingPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<LandingPage_Where_Or>>>;
  createdAt?: InputMaybe<LandingPage_CreatedAt_Operator>;
  id?: InputMaybe<LandingPage_Id_Operator>;
  site?: InputMaybe<LandingPage_Site_Operator>;
  updatedAt?: InputMaybe<LandingPage_UpdatedAt_Operator>;
};

export type LandingPage_Where_And = {
  createdAt?: InputMaybe<LandingPage_CreatedAt_Operator>;
  id?: InputMaybe<LandingPage_Id_Operator>;
  site?: InputMaybe<LandingPage_Site_Operator>;
  updatedAt?: InputMaybe<LandingPage_UpdatedAt_Operator>;
};

export type LandingPage_Where_Or = {
  createdAt?: InputMaybe<LandingPage_CreatedAt_Operator>;
  id?: InputMaybe<LandingPage_Id_Operator>;
  site?: InputMaybe<LandingPage_Site_Operator>;
  updatedAt?: InputMaybe<LandingPage_UpdatedAt_Operator>;
};

export type LandingPages = {
  __typename?: 'LandingPages';
  docs?: Maybe<Array<Maybe<LandingPage>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  prefix?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  source?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaBlock = {
  __typename?: 'MediaBlock';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  media: Media;
  mediaBlockBackgroundColor?: Maybe<MediaBlock_MediaBlockBackgroundColor>;
  position?: Maybe<MediaBlock_Position>;
};

export type MediaBlockMediaArgs = {
  where?: InputMaybe<MediaBlock_Media_Where>;
};

export type MediaBlock_Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaBlock_Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type MediaBlock_Media_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type MediaBlock_Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MediaBlock_Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<MediaBlock_Media_Where_Or>>>;
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<MediaBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<MediaBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<MediaBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<MediaBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<MediaBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Where_And = {
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<MediaBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<MediaBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<MediaBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<MediaBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<MediaBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Where_Or = {
  alt?: InputMaybe<MediaBlock_Media_Alt_Operator>;
  createdAt?: InputMaybe<MediaBlock_Media_CreatedAt_Operator>;
  filename?: InputMaybe<MediaBlock_Media_Filename_Operator>;
  filesize?: InputMaybe<MediaBlock_Media_Filesize_Operator>;
  height?: InputMaybe<MediaBlock_Media_Height_Operator>;
  id?: InputMaybe<MediaBlock_Media_Id_Operator>;
  mimeType?: InputMaybe<MediaBlock_Media_MimeType_Operator>;
  prefix?: InputMaybe<MediaBlock_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<MediaBlock_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<MediaBlock_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<MediaBlock_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<MediaBlock_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<MediaBlock_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<MediaBlock_Media_Source_Operator>;
  updatedAt?: InputMaybe<MediaBlock_Media_UpdatedAt_Operator>;
  url?: InputMaybe<MediaBlock_Media_Url_Operator>;
  width?: InputMaybe<MediaBlock_Media_Width_Operator>;
};

export type MediaBlock_Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum MediaBlock_MediaBlockBackgroundColor {
  Black = 'black',
  White = 'white',
}

export enum MediaBlock_Position {
  Default = 'default',
  Fullscreen = 'fullscreen',
}

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  prefix?: Maybe<MediaDocAccessFields_Prefix>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  source?: Maybe<MediaDocAccessFields_Source>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Prefix = {
  __typename?: 'MediaDocAccessFields_prefix';
  create?: Maybe<MediaDocAccessFields_Prefix_Create>;
  delete?: Maybe<MediaDocAccessFields_Prefix_Delete>;
  read?: Maybe<MediaDocAccessFields_Prefix_Read>;
  update?: Maybe<MediaDocAccessFields_Prefix_Update>;
};

export type MediaDocAccessFields_Prefix_Create = {
  __typename?: 'MediaDocAccessFields_prefix_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Prefix_Delete = {
  __typename?: 'MediaDocAccessFields_prefix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Prefix_Read = {
  __typename?: 'MediaDocAccessFields_prefix_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Prefix_Update = {
  __typename?: 'MediaDocAccessFields_prefix_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  feature?: Maybe<MediaDocAccessFields_Sizes_Feature>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature = {
  __typename?: 'MediaDocAccessFields_sizes_feature';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Feature_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Feature_Width>;
};

export type MediaDocAccessFields_Sizes_Feature_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Feature_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Source = {
  __typename?: 'MediaDocAccessFields_source';
  create?: Maybe<MediaDocAccessFields_Source_Create>;
  delete?: Maybe<MediaDocAccessFields_Source_Delete>;
  read?: Maybe<MediaDocAccessFields_Source_Read>;
  update?: Maybe<MediaDocAccessFields_Source_Update>;
};

export type MediaDocAccessFields_Source_Create = {
  __typename?: 'MediaDocAccessFields_source_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Source_Delete = {
  __typename?: 'MediaDocAccessFields_source_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Source_Read = {
  __typename?: 'MediaDocAccessFields_source_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Source_Update = {
  __typename?: 'MediaDocAccessFields_source_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  prefix?: Maybe<MediaFields_Prefix>;
  sizes?: Maybe<MediaFields_Sizes>;
  source?: Maybe<MediaFields_Source>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Prefix = {
  __typename?: 'MediaFields_prefix';
  create?: Maybe<MediaFields_Prefix_Create>;
  delete?: Maybe<MediaFields_Prefix_Delete>;
  read?: Maybe<MediaFields_Prefix_Read>;
  update?: Maybe<MediaFields_Prefix_Update>;
};

export type MediaFields_Prefix_Create = {
  __typename?: 'MediaFields_prefix_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Prefix_Delete = {
  __typename?: 'MediaFields_prefix_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Prefix_Read = {
  __typename?: 'MediaFields_prefix_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Prefix_Update = {
  __typename?: 'MediaFields_prefix_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  feature?: Maybe<MediaFields_Sizes_Feature>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature = {
  __typename?: 'MediaFields_sizes_feature';
  create?: Maybe<MediaFields_Sizes_Feature_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Delete>;
  fields?: Maybe<MediaFields_Sizes_Feature_Fields>;
  read?: Maybe<MediaFields_Sizes_Feature_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Update>;
};

export type MediaFields_Sizes_Feature_Create = {
  __typename?: 'MediaFields_sizes_feature_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Delete = {
  __typename?: 'MediaFields_sizes_feature_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Fields = {
  __typename?: 'MediaFields_sizes_feature_Fields';
  filename?: Maybe<MediaFields_Sizes_Feature_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Feature_Filesize>;
  height?: Maybe<MediaFields_Sizes_Feature_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Feature_MimeType>;
  url?: Maybe<MediaFields_Sizes_Feature_Url>;
  width?: Maybe<MediaFields_Sizes_Feature_Width>;
};

export type MediaFields_Sizes_Feature_Read = {
  __typename?: 'MediaFields_sizes_feature_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Update = {
  __typename?: 'MediaFields_sizes_feature_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename = {
  __typename?: 'MediaFields_sizes_feature_filename';
  create?: Maybe<MediaFields_Sizes_Feature_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filename_Update>;
};

export type MediaFields_Sizes_Feature_Filename_Create = {
  __typename?: 'MediaFields_sizes_feature_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Delete = {
  __typename?: 'MediaFields_sizes_feature_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Read = {
  __typename?: 'MediaFields_sizes_feature_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filename_Update = {
  __typename?: 'MediaFields_sizes_feature_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize = {
  __typename?: 'MediaFields_sizes_feature_filesize';
  create?: Maybe<MediaFields_Sizes_Feature_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Filesize_Update>;
};

export type MediaFields_Sizes_Feature_Filesize_Create = {
  __typename?: 'MediaFields_sizes_feature_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_feature_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Read = {
  __typename?: 'MediaFields_sizes_feature_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Filesize_Update = {
  __typename?: 'MediaFields_sizes_feature_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height = {
  __typename?: 'MediaFields_sizes_feature_height';
  create?: Maybe<MediaFields_Sizes_Feature_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Height_Update>;
};

export type MediaFields_Sizes_Feature_Height_Create = {
  __typename?: 'MediaFields_sizes_feature_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Delete = {
  __typename?: 'MediaFields_sizes_feature_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Read = {
  __typename?: 'MediaFields_sizes_feature_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Height_Update = {
  __typename?: 'MediaFields_sizes_feature_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType = {
  __typename?: 'MediaFields_sizes_feature_mimeType';
  create?: Maybe<MediaFields_Sizes_Feature_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_MimeType_Update>;
};

export type MediaFields_Sizes_Feature_MimeType_Create = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Read = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_MimeType_Update = {
  __typename?: 'MediaFields_sizes_feature_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url = {
  __typename?: 'MediaFields_sizes_feature_url';
  create?: Maybe<MediaFields_Sizes_Feature_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Url_Update>;
};

export type MediaFields_Sizes_Feature_Url_Create = {
  __typename?: 'MediaFields_sizes_feature_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Delete = {
  __typename?: 'MediaFields_sizes_feature_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Read = {
  __typename?: 'MediaFields_sizes_feature_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Url_Update = {
  __typename?: 'MediaFields_sizes_feature_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width = {
  __typename?: 'MediaFields_sizes_feature_width';
  create?: Maybe<MediaFields_Sizes_Feature_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Feature_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Feature_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Feature_Width_Update>;
};

export type MediaFields_Sizes_Feature_Width_Create = {
  __typename?: 'MediaFields_sizes_feature_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Delete = {
  __typename?: 'MediaFields_sizes_feature_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Read = {
  __typename?: 'MediaFields_sizes_feature_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Feature_Width_Update = {
  __typename?: 'MediaFields_sizes_feature_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Source = {
  __typename?: 'MediaFields_source';
  create?: Maybe<MediaFields_Source_Create>;
  delete?: Maybe<MediaFields_Source_Delete>;
  read?: Maybe<MediaFields_Source_Read>;
  update?: Maybe<MediaFields_Source_Update>;
};

export type MediaFields_Source_Create = {
  __typename?: 'MediaFields_source_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Source_Delete = {
  __typename?: 'MediaFields_source_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Source_Read = {
  __typename?: 'MediaFields_source_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Source_Update = {
  __typename?: 'MediaFields_source_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  feature?: Maybe<Media_Sizes_Feature>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_Feature = {
  __typename?: 'Media_Sizes_Feature';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Media_Source_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Media_Source_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  prefix?: InputMaybe<Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Media_Source_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Message = {
  __typename?: 'Message';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['JSON']['output']>;
};

export type MessageMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory?: Maybe<Category>;
  createForm?: Maybe<Form>;
  createFormSubmission?: Maybe<FormSubmission>;
  createLandingPage?: Maybe<LandingPage>;
  createMedia?: Maybe<Media>;
  createPage?: Maybe<Page>;
  createPost?: Maybe<Post>;
  createRedirect?: Maybe<Redirect>;
  createSite?: Maybe<Site>;
  createUser?: Maybe<User>;
  deleteCategory?: Maybe<Category>;
  deleteForm?: Maybe<Form>;
  deleteFormSubmission?: Maybe<FormSubmission>;
  deleteLandingPage?: Maybe<LandingPage>;
  deleteMedia?: Maybe<Media>;
  deletePage?: Maybe<Page>;
  deletePost?: Maybe<Post>;
  deletePreference?: Maybe<Preference>;
  deleteRedirect?: Maybe<Redirect>;
  deleteSite?: Maybe<Site>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  restoreVersionPage?: Maybe<Page>;
  restoreVersionPost?: Maybe<Post>;
  unlockUser: Scalars['Boolean']['output'];
  updateCategory?: Maybe<Category>;
  updateForm?: Maybe<Form>;
  updateFormSubmission?: Maybe<FormSubmission>;
  updateLandingPage?: Maybe<LandingPage>;
  updateMedia?: Maybe<Media>;
  updatePage?: Maybe<Page>;
  updatePost?: Maybe<Post>;
  updatePreference?: Maybe<Preference>;
  updateRedirect?: Maybe<Redirect>;
  updateSite?: Maybe<Site>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};

export type MutationCreateCategoryArgs = {
  data: MutationCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateFormArgs = {
  data: MutationFormInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateFormSubmissionArgs = {
  data: MutationFormSubmissionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateLandingPageArgs = {
  data: MutationLandingPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreatePageArgs = {
  data: MutationPageInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreatePostArgs = {
  data: MutationPostInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateRedirectArgs = {
  data: MutationRedirectInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateSiteArgs = {
  data: MutationSiteInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteFormArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteFormSubmissionArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteLandingPageArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeletePageArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeletePostArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeletePreferenceArgs = {
  key: Scalars['String']['input'];
};

export type MutationDeleteRedirectArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteSiteArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreVersionPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRestoreVersionPostArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};

export type MutationUpdateCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFormUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateFormSubmissionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationFormSubmissionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateLandingPageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationLandingPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPageUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdatePostArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPostUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdatePreferenceArgs = {
  key: Scalars['String']['input'];
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUpdateRedirectArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationRedirectUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateSiteArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSiteUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type Number = {
  __typename?: 'Number';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Page = {
  __typename?: 'Page';
  _status?: Maybe<Page__Status>;
  breadcrumbs?: Maybe<Array<Page_Breadcrumbs>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  layout?: Maybe<Array<Page_Layout>>;
  meta?: Maybe<Page_Meta>;
  parent?: Maybe<Page>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  site?: Maybe<Site>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type PageVersion = {
  __typename?: 'PageVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Page>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PageVersion_Version>;
};

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version';
  _status?: Maybe<PageVersion_Version__Status>;
  breadcrumbs?: Maybe<Array<PageVersion_Version_Breadcrumbs>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  layout?: Maybe<Array<PageVersion_Version_Layout>>;
  meta?: Maybe<PageVersion_Version_Meta>;
  parent?: Maybe<Page>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  site?: Maybe<Site>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageVersion_Version_Breadcrumbs = {
  __typename?: 'PageVersion_Version_Breadcrumbs';
  doc?: Maybe<Page>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PageVersion_Version_Layout =
  | ACallToActionBlock
  | AFormBlock
  | APrivacyPolicy
  | AShortformBlock
  | AThankYouBlock
  | Archive
  | Content
  | MediaBlock;

export type PageVersion_Version_Meta = {
  __typename?: 'PageVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PageVersion_Version_MetaImageArgs = {
  where?: InputMaybe<PageVersion_Version_Meta_Image_Where>;
};

export type PageVersion_Version_Meta_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVersion_Version_Meta_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PageVersion_Version_Meta_Image_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PageVersion_Version_Meta_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageVersion_Version_Meta_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<PageVersion_Version_Meta_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PageVersion_Version_Meta_Image_Where_Or>>>;
  alt?: InputMaybe<PageVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PageVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PageVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Meta_Image_Width_Operator>;
};

export type PageVersion_Version_Meta_Image_Where_And = {
  alt?: InputMaybe<PageVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PageVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PageVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Meta_Image_Width_Operator>;
};

export type PageVersion_Version_Meta_Image_Where_Or = {
  alt?: InputMaybe<PageVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PageVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PageVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PageVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PageVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PageVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PageVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PageVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PageVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PageVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PageVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PageVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PageVersion_Version_Meta_Image_Width_Operator>;
};

export type PageVersion_Version_Meta_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published',
}

export type Page_Breadcrumbs = {
  __typename?: 'Page_Breadcrumbs';
  doc?: Maybe<Page>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Page_Layout =
  | ACallToActionBlock
  | AFormBlock
  | APrivacyPolicy
  | AShortformBlock
  | AThankYouBlock
  | Archive
  | Content
  | MediaBlock;

export type Page_Meta = {
  __typename?: 'Page_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Page_MetaImageArgs = {
  where?: InputMaybe<Page_Meta_Image_Where>;
};

export type Page_Meta_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Meta_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Page_Meta_Image_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Meta_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Meta_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Meta_Image_Where_Or>>>;
  alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Meta_Image_Height_Operator>;
  id?: InputMaybe<Page_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Page_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Page_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Page_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Page_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Page_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Meta_Image_Url_Operator>;
  width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Where_And = {
  alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Meta_Image_Height_Operator>;
  id?: InputMaybe<Page_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Page_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Page_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Page_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Page_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Page_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Meta_Image_Url_Operator>;
  width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Where_Or = {
  alt?: InputMaybe<Page_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Page_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Page_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Page_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Page_Meta_Image_Height_Operator>;
  id?: InputMaybe<Page_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Page_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Page_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Page_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Page_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Page_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Page_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Page_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Page_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Page_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Page_Meta_Image_Url_Operator>;
  width?: InputMaybe<Page_Meta_Image_Width_Operator>;
};

export type Page_Meta_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Page__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  equals?: InputMaybe<Page__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
  not_equals?: InputMaybe<Page__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>;
};

export type Page_Breadcrumbs__Doc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Breadcrumbs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Breadcrumbs__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Breadcrumbs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Page_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>;
  _status?: InputMaybe<Page__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Page_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Page_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Page_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Page_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  parent?: InputMaybe<Page_Parent_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  site?: InputMaybe<Page_Site_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_And = {
  _status?: InputMaybe<Page__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Page_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Page_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Page_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Page_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  parent?: InputMaybe<Page_Parent_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  site?: InputMaybe<Page_Site_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Page_Where_Or = {
  _status?: InputMaybe<Page__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Page_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Page_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Page_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Page_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Page_CreatedAt_Operator>;
  id?: InputMaybe<Page_Id_Operator>;
  meta__description?: InputMaybe<Page_Meta__Description_Operator>;
  meta__image?: InputMaybe<Page_Meta__Image_Operator>;
  meta__title?: InputMaybe<Page_Meta__Title_Operator>;
  parent?: InputMaybe<Page_Parent_Operator>;
  publishedDate?: InputMaybe<Page_PublishedDate_Operator>;
  site?: InputMaybe<Page_Site_Operator>;
  slug?: InputMaybe<Page_Slug_Operator>;
  title?: InputMaybe<Page_Title_Operator>;
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>;
};

export type Pages = {
  __typename?: 'Pages';
  docs?: Maybe<Array<Maybe<Page>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields';
  _status?: Maybe<PagesDocAccessFields__Status>;
  breadcrumbs?: Maybe<PagesDocAccessFields_Breadcrumbs>;
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>;
  layout?: Maybe<PagesDocAccessFields_Layout>;
  meta?: Maybe<PagesDocAccessFields_Meta>;
  parent?: Maybe<PagesDocAccessFields_Parent>;
  publishedDate?: Maybe<PagesDocAccessFields_PublishedDate>;
  site?: Maybe<PagesDocAccessFields_Site>;
  slug?: Maybe<PagesDocAccessFields_Slug>;
  title?: Maybe<PagesDocAccessFields_Title>;
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>;
};

export type PagesDocAccessFields__Status = {
  __typename?: 'PagesDocAccessFields__status';
  create?: Maybe<PagesDocAccessFields__Status_Create>;
  delete?: Maybe<PagesDocAccessFields__Status_Delete>;
  read?: Maybe<PagesDocAccessFields__Status_Read>;
  update?: Maybe<PagesDocAccessFields__Status_Update>;
};

export type PagesDocAccessFields__Status_Create = {
  __typename?: 'PagesDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Delete = {
  __typename?: 'PagesDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Read = {
  __typename?: 'PagesDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields__Status_Update = {
  __typename?: 'PagesDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs = {
  __typename?: 'PagesDocAccessFields_breadcrumbs';
  create?: Maybe<PagesDocAccessFields_Breadcrumbs_Create>;
  delete?: Maybe<PagesDocAccessFields_Breadcrumbs_Delete>;
  fields?: Maybe<PagesDocAccessFields_Breadcrumbs_Fields>;
  read?: Maybe<PagesDocAccessFields_Breadcrumbs_Read>;
  update?: Maybe<PagesDocAccessFields_Breadcrumbs_Update>;
};

export type PagesDocAccessFields_Breadcrumbs_Create = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Delete = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Fields = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_Fields';
  doc?: Maybe<PagesDocAccessFields_Breadcrumbs_Doc>;
  id?: Maybe<PagesDocAccessFields_Breadcrumbs_Id>;
  label?: Maybe<PagesDocAccessFields_Breadcrumbs_Label>;
  url?: Maybe<PagesDocAccessFields_Breadcrumbs_Url>;
};

export type PagesDocAccessFields_Breadcrumbs_Read = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Update = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Doc = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_doc';
  create?: Maybe<PagesDocAccessFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<PagesDocAccessFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<PagesDocAccessFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<PagesDocAccessFields_Breadcrumbs_Doc_Update>;
};

export type PagesDocAccessFields_Breadcrumbs_Doc_Create = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Doc_Read = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Doc_Update = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Id = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_id';
  create?: Maybe<PagesDocAccessFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<PagesDocAccessFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<PagesDocAccessFields_Breadcrumbs_Id_Read>;
  update?: Maybe<PagesDocAccessFields_Breadcrumbs_Id_Update>;
};

export type PagesDocAccessFields_Breadcrumbs_Id_Create = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Id_Delete = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Id_Read = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Id_Update = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Label = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_label';
  create?: Maybe<PagesDocAccessFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<PagesDocAccessFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<PagesDocAccessFields_Breadcrumbs_Label_Read>;
  update?: Maybe<PagesDocAccessFields_Breadcrumbs_Label_Update>;
};

export type PagesDocAccessFields_Breadcrumbs_Label_Create = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Label_Delete = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Label_Read = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Label_Update = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Url = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_url';
  create?: Maybe<PagesDocAccessFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<PagesDocAccessFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<PagesDocAccessFields_Breadcrumbs_Url_Read>;
  update?: Maybe<PagesDocAccessFields_Breadcrumbs_Url_Update>;
};

export type PagesDocAccessFields_Breadcrumbs_Url_Create = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Url_Delete = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Url_Read = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Breadcrumbs_Url_Update = {
  __typename?: 'PagesDocAccessFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt';
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>;
};

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout = {
  __typename?: 'PagesDocAccessFields_layout';
  create?: Maybe<PagesDocAccessFields_Layout_Create>;
  delete?: Maybe<PagesDocAccessFields_Layout_Delete>;
  read?: Maybe<PagesDocAccessFields_Layout_Read>;
  update?: Maybe<PagesDocAccessFields_Layout_Update>;
};

export type PagesDocAccessFields_Layout_Create = {
  __typename?: 'PagesDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Delete = {
  __typename?: 'PagesDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Read = {
  __typename?: 'PagesDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Layout_Update = {
  __typename?: 'PagesDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta = {
  __typename?: 'PagesDocAccessFields_meta';
  create?: Maybe<PagesDocAccessFields_Meta_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Delete>;
  fields?: Maybe<PagesDocAccessFields_Meta_Fields>;
  read?: Maybe<PagesDocAccessFields_Meta_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Update>;
};

export type PagesDocAccessFields_Meta_Create = {
  __typename?: 'PagesDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Delete = {
  __typename?: 'PagesDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Fields = {
  __typename?: 'PagesDocAccessFields_meta_Fields';
  description?: Maybe<PagesDocAccessFields_Meta_Description>;
  image?: Maybe<PagesDocAccessFields_Meta_Image>;
  overview?: Maybe<PagesDocAccessFields_Meta_Overview>;
  preview?: Maybe<PagesDocAccessFields_Meta_Preview>;
  title?: Maybe<PagesDocAccessFields_Meta_Title>;
};

export type PagesDocAccessFields_Meta_Read = {
  __typename?: 'PagesDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Update = {
  __typename?: 'PagesDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description = {
  __typename?: 'PagesDocAccessFields_meta_description';
  create?: Maybe<PagesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Description_Update>;
};

export type PagesDocAccessFields_Meta_Description_Create = {
  __typename?: 'PagesDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PagesDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Read = {
  __typename?: 'PagesDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Description_Update = {
  __typename?: 'PagesDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image = {
  __typename?: 'PagesDocAccessFields_meta_image';
  create?: Maybe<PagesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Image_Update>;
};

export type PagesDocAccessFields_Meta_Image_Create = {
  __typename?: 'PagesDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PagesDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Read = {
  __typename?: 'PagesDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Image_Update = {
  __typename?: 'PagesDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview = {
  __typename?: 'PagesDocAccessFields_meta_overview';
  create?: Maybe<PagesDocAccessFields_Meta_Overview_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Overview_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Overview_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Overview_Update>;
};

export type PagesDocAccessFields_Meta_Overview_Create = {
  __typename?: 'PagesDocAccessFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Delete = {
  __typename?: 'PagesDocAccessFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Read = {
  __typename?: 'PagesDocAccessFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Overview_Update = {
  __typename?: 'PagesDocAccessFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview = {
  __typename?: 'PagesDocAccessFields_meta_preview';
  create?: Maybe<PagesDocAccessFields_Meta_Preview_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Preview_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Preview_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Preview_Update>;
};

export type PagesDocAccessFields_Meta_Preview_Create = {
  __typename?: 'PagesDocAccessFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Delete = {
  __typename?: 'PagesDocAccessFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Read = {
  __typename?: 'PagesDocAccessFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Preview_Update = {
  __typename?: 'PagesDocAccessFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title = {
  __typename?: 'PagesDocAccessFields_meta_title';
  create?: Maybe<PagesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Meta_Title_Update>;
};

export type PagesDocAccessFields_Meta_Title_Create = {
  __typename?: 'PagesDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PagesDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Read = {
  __typename?: 'PagesDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Meta_Title_Update = {
  __typename?: 'PagesDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Parent = {
  __typename?: 'PagesDocAccessFields_parent';
  create?: Maybe<PagesDocAccessFields_Parent_Create>;
  delete?: Maybe<PagesDocAccessFields_Parent_Delete>;
  read?: Maybe<PagesDocAccessFields_Parent_Read>;
  update?: Maybe<PagesDocAccessFields_Parent_Update>;
};

export type PagesDocAccessFields_Parent_Create = {
  __typename?: 'PagesDocAccessFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Parent_Delete = {
  __typename?: 'PagesDocAccessFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Parent_Read = {
  __typename?: 'PagesDocAccessFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Parent_Update = {
  __typename?: 'PagesDocAccessFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate = {
  __typename?: 'PagesDocAccessFields_publishedDate';
  create?: Maybe<PagesDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<PagesDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<PagesDocAccessFields_PublishedDate_Read>;
  update?: Maybe<PagesDocAccessFields_PublishedDate_Update>;
};

export type PagesDocAccessFields_PublishedDate_Create = {
  __typename?: 'PagesDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Delete = {
  __typename?: 'PagesDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Read = {
  __typename?: 'PagesDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_PublishedDate_Update = {
  __typename?: 'PagesDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Site = {
  __typename?: 'PagesDocAccessFields_site';
  create?: Maybe<PagesDocAccessFields_Site_Create>;
  delete?: Maybe<PagesDocAccessFields_Site_Delete>;
  read?: Maybe<PagesDocAccessFields_Site_Read>;
  update?: Maybe<PagesDocAccessFields_Site_Update>;
};

export type PagesDocAccessFields_Site_Create = {
  __typename?: 'PagesDocAccessFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Site_Delete = {
  __typename?: 'PagesDocAccessFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Site_Read = {
  __typename?: 'PagesDocAccessFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Site_Update = {
  __typename?: 'PagesDocAccessFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug';
  create?: Maybe<PagesDocAccessFields_Slug_Create>;
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>;
  read?: Maybe<PagesDocAccessFields_Slug_Read>;
  update?: Maybe<PagesDocAccessFields_Slug_Update>;
};

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title';
  create?: Maybe<PagesDocAccessFields_Title_Create>;
  delete?: Maybe<PagesDocAccessFields_Title_Delete>;
  read?: Maybe<PagesDocAccessFields_Title_Read>;
  update?: Maybe<PagesDocAccessFields_Title_Update>;
};

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt';
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>;
};

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields = {
  __typename?: 'PagesFields';
  _status?: Maybe<PagesFields__Status>;
  breadcrumbs?: Maybe<PagesFields_Breadcrumbs>;
  createdAt?: Maybe<PagesFields_CreatedAt>;
  layout?: Maybe<PagesFields_Layout>;
  meta?: Maybe<PagesFields_Meta>;
  parent?: Maybe<PagesFields_Parent>;
  publishedDate?: Maybe<PagesFields_PublishedDate>;
  site?: Maybe<PagesFields_Site>;
  slug?: Maybe<PagesFields_Slug>;
  title?: Maybe<PagesFields_Title>;
  updatedAt?: Maybe<PagesFields_UpdatedAt>;
};

export type PagesFields__Status = {
  __typename?: 'PagesFields__status';
  create?: Maybe<PagesFields__Status_Create>;
  delete?: Maybe<PagesFields__Status_Delete>;
  read?: Maybe<PagesFields__Status_Read>;
  update?: Maybe<PagesFields__Status_Update>;
};

export type PagesFields__Status_Create = {
  __typename?: 'PagesFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Delete = {
  __typename?: 'PagesFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Read = {
  __typename?: 'PagesFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields__Status_Update = {
  __typename?: 'PagesFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs = {
  __typename?: 'PagesFields_breadcrumbs';
  create?: Maybe<PagesFields_Breadcrumbs_Create>;
  delete?: Maybe<PagesFields_Breadcrumbs_Delete>;
  fields?: Maybe<PagesFields_Breadcrumbs_Fields>;
  read?: Maybe<PagesFields_Breadcrumbs_Read>;
  update?: Maybe<PagesFields_Breadcrumbs_Update>;
};

export type PagesFields_Breadcrumbs_Create = {
  __typename?: 'PagesFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Delete = {
  __typename?: 'PagesFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Fields = {
  __typename?: 'PagesFields_breadcrumbs_Fields';
  doc?: Maybe<PagesFields_Breadcrumbs_Doc>;
  id?: Maybe<PagesFields_Breadcrumbs_Id>;
  label?: Maybe<PagesFields_Breadcrumbs_Label>;
  url?: Maybe<PagesFields_Breadcrumbs_Url>;
};

export type PagesFields_Breadcrumbs_Read = {
  __typename?: 'PagesFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Update = {
  __typename?: 'PagesFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Doc = {
  __typename?: 'PagesFields_breadcrumbs_doc';
  create?: Maybe<PagesFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<PagesFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<PagesFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<PagesFields_Breadcrumbs_Doc_Update>;
};

export type PagesFields_Breadcrumbs_Doc_Create = {
  __typename?: 'PagesFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'PagesFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Doc_Read = {
  __typename?: 'PagesFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Doc_Update = {
  __typename?: 'PagesFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Id = {
  __typename?: 'PagesFields_breadcrumbs_id';
  create?: Maybe<PagesFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<PagesFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<PagesFields_Breadcrumbs_Id_Read>;
  update?: Maybe<PagesFields_Breadcrumbs_Id_Update>;
};

export type PagesFields_Breadcrumbs_Id_Create = {
  __typename?: 'PagesFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Id_Delete = {
  __typename?: 'PagesFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Id_Read = {
  __typename?: 'PagesFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Id_Update = {
  __typename?: 'PagesFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Label = {
  __typename?: 'PagesFields_breadcrumbs_label';
  create?: Maybe<PagesFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<PagesFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<PagesFields_Breadcrumbs_Label_Read>;
  update?: Maybe<PagesFields_Breadcrumbs_Label_Update>;
};

export type PagesFields_Breadcrumbs_Label_Create = {
  __typename?: 'PagesFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Label_Delete = {
  __typename?: 'PagesFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Label_Read = {
  __typename?: 'PagesFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Label_Update = {
  __typename?: 'PagesFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Url = {
  __typename?: 'PagesFields_breadcrumbs_url';
  create?: Maybe<PagesFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<PagesFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<PagesFields_Breadcrumbs_Url_Read>;
  update?: Maybe<PagesFields_Breadcrumbs_Url_Update>;
};

export type PagesFields_Breadcrumbs_Url_Create = {
  __typename?: 'PagesFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Url_Delete = {
  __typename?: 'PagesFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Url_Read = {
  __typename?: 'PagesFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Breadcrumbs_Url_Update = {
  __typename?: 'PagesFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt';
  create?: Maybe<PagesFields_CreatedAt_Create>;
  delete?: Maybe<PagesFields_CreatedAt_Delete>;
  read?: Maybe<PagesFields_CreatedAt_Read>;
  update?: Maybe<PagesFields_CreatedAt_Update>;
};

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout = {
  __typename?: 'PagesFields_layout';
  create?: Maybe<PagesFields_Layout_Create>;
  delete?: Maybe<PagesFields_Layout_Delete>;
  read?: Maybe<PagesFields_Layout_Read>;
  update?: Maybe<PagesFields_Layout_Update>;
};

export type PagesFields_Layout_Create = {
  __typename?: 'PagesFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Delete = {
  __typename?: 'PagesFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Read = {
  __typename?: 'PagesFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Layout_Update = {
  __typename?: 'PagesFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta = {
  __typename?: 'PagesFields_meta';
  create?: Maybe<PagesFields_Meta_Create>;
  delete?: Maybe<PagesFields_Meta_Delete>;
  fields?: Maybe<PagesFields_Meta_Fields>;
  read?: Maybe<PagesFields_Meta_Read>;
  update?: Maybe<PagesFields_Meta_Update>;
};

export type PagesFields_Meta_Create = {
  __typename?: 'PagesFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Delete = {
  __typename?: 'PagesFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Fields = {
  __typename?: 'PagesFields_meta_Fields';
  description?: Maybe<PagesFields_Meta_Description>;
  image?: Maybe<PagesFields_Meta_Image>;
  overview?: Maybe<PagesFields_Meta_Overview>;
  preview?: Maybe<PagesFields_Meta_Preview>;
  title?: Maybe<PagesFields_Meta_Title>;
};

export type PagesFields_Meta_Read = {
  __typename?: 'PagesFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Update = {
  __typename?: 'PagesFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description = {
  __typename?: 'PagesFields_meta_description';
  create?: Maybe<PagesFields_Meta_Description_Create>;
  delete?: Maybe<PagesFields_Meta_Description_Delete>;
  read?: Maybe<PagesFields_Meta_Description_Read>;
  update?: Maybe<PagesFields_Meta_Description_Update>;
};

export type PagesFields_Meta_Description_Create = {
  __typename?: 'PagesFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Delete = {
  __typename?: 'PagesFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Read = {
  __typename?: 'PagesFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Description_Update = {
  __typename?: 'PagesFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image = {
  __typename?: 'PagesFields_meta_image';
  create?: Maybe<PagesFields_Meta_Image_Create>;
  delete?: Maybe<PagesFields_Meta_Image_Delete>;
  read?: Maybe<PagesFields_Meta_Image_Read>;
  update?: Maybe<PagesFields_Meta_Image_Update>;
};

export type PagesFields_Meta_Image_Create = {
  __typename?: 'PagesFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Delete = {
  __typename?: 'PagesFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Read = {
  __typename?: 'PagesFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Image_Update = {
  __typename?: 'PagesFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview = {
  __typename?: 'PagesFields_meta_overview';
  create?: Maybe<PagesFields_Meta_Overview_Create>;
  delete?: Maybe<PagesFields_Meta_Overview_Delete>;
  read?: Maybe<PagesFields_Meta_Overview_Read>;
  update?: Maybe<PagesFields_Meta_Overview_Update>;
};

export type PagesFields_Meta_Overview_Create = {
  __typename?: 'PagesFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Delete = {
  __typename?: 'PagesFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Read = {
  __typename?: 'PagesFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Overview_Update = {
  __typename?: 'PagesFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview = {
  __typename?: 'PagesFields_meta_preview';
  create?: Maybe<PagesFields_Meta_Preview_Create>;
  delete?: Maybe<PagesFields_Meta_Preview_Delete>;
  read?: Maybe<PagesFields_Meta_Preview_Read>;
  update?: Maybe<PagesFields_Meta_Preview_Update>;
};

export type PagesFields_Meta_Preview_Create = {
  __typename?: 'PagesFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Delete = {
  __typename?: 'PagesFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Read = {
  __typename?: 'PagesFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Preview_Update = {
  __typename?: 'PagesFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title = {
  __typename?: 'PagesFields_meta_title';
  create?: Maybe<PagesFields_Meta_Title_Create>;
  delete?: Maybe<PagesFields_Meta_Title_Delete>;
  read?: Maybe<PagesFields_Meta_Title_Read>;
  update?: Maybe<PagesFields_Meta_Title_Update>;
};

export type PagesFields_Meta_Title_Create = {
  __typename?: 'PagesFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Delete = {
  __typename?: 'PagesFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Read = {
  __typename?: 'PagesFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Meta_Title_Update = {
  __typename?: 'PagesFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Parent = {
  __typename?: 'PagesFields_parent';
  create?: Maybe<PagesFields_Parent_Create>;
  delete?: Maybe<PagesFields_Parent_Delete>;
  read?: Maybe<PagesFields_Parent_Read>;
  update?: Maybe<PagesFields_Parent_Update>;
};

export type PagesFields_Parent_Create = {
  __typename?: 'PagesFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Parent_Delete = {
  __typename?: 'PagesFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Parent_Read = {
  __typename?: 'PagesFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Parent_Update = {
  __typename?: 'PagesFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate = {
  __typename?: 'PagesFields_publishedDate';
  create?: Maybe<PagesFields_PublishedDate_Create>;
  delete?: Maybe<PagesFields_PublishedDate_Delete>;
  read?: Maybe<PagesFields_PublishedDate_Read>;
  update?: Maybe<PagesFields_PublishedDate_Update>;
};

export type PagesFields_PublishedDate_Create = {
  __typename?: 'PagesFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Delete = {
  __typename?: 'PagesFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Read = {
  __typename?: 'PagesFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_PublishedDate_Update = {
  __typename?: 'PagesFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Site = {
  __typename?: 'PagesFields_site';
  create?: Maybe<PagesFields_Site_Create>;
  delete?: Maybe<PagesFields_Site_Delete>;
  read?: Maybe<PagesFields_Site_Read>;
  update?: Maybe<PagesFields_Site_Update>;
};

export type PagesFields_Site_Create = {
  __typename?: 'PagesFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Site_Delete = {
  __typename?: 'PagesFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Site_Read = {
  __typename?: 'PagesFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Site_Update = {
  __typename?: 'PagesFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug';
  create?: Maybe<PagesFields_Slug_Create>;
  delete?: Maybe<PagesFields_Slug_Delete>;
  read?: Maybe<PagesFields_Slug_Read>;
  update?: Maybe<PagesFields_Slug_Update>;
};

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title = {
  __typename?: 'PagesFields_title';
  create?: Maybe<PagesFields_Title_Create>;
  delete?: Maybe<PagesFields_Title_Delete>;
  read?: Maybe<PagesFields_Title_Read>;
  update?: Maybe<PagesFields_Title_Update>;
};

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt';
  create?: Maybe<PagesFields_UpdatedAt_Create>;
  delete?: Maybe<PagesFields_UpdatedAt_Delete>;
  read?: Maybe<PagesFields_UpdatedAt_Read>;
  update?: Maybe<PagesFields_UpdatedAt_Update>;
};

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsAccess = {
  __typename?: 'PagesReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesReadVersionsDocAccess = {
  __typename?: 'PagesReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Post = {
  __typename?: 'Post';
  _status?: Maybe<Post__Status>;
  breadcrumbs?: Maybe<Array<Post_Breadcrumbs>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hero?: Maybe<Post_Hero>;
  id?: Maybe<Scalars['String']['output']>;
  layout: Array<Post_Layout>;
  meta?: Maybe<Post_Meta>;
  parent?: Maybe<Post>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  site?: Maybe<Site>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostUpdate_Hero_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<PostUpdate_Hero_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PostUpdate_Hero_Links_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
}

export enum PostUpdate_Hero_Links_Link_Appearance_MutationInput {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum PostUpdate_Hero_Type_MutationInput {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export enum PostUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type PostVersion = {
  __typename?: 'PostVersion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  parent?: Maybe<Post>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  version?: Maybe<PostVersion_Version>;
};

export type PostVersion_Version = {
  __typename?: 'PostVersion_Version';
  _status?: Maybe<PostVersion_Version__Status>;
  breadcrumbs?: Maybe<Array<PostVersion_Version_Breadcrumbs>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  hero?: Maybe<PostVersion_Version_Hero>;
  layout: Array<PostVersion_Version_Layout>;
  meta?: Maybe<PostVersion_Version_Meta>;
  parent?: Maybe<Post>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  site?: Maybe<Site>;
  slug?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PostVersion_Version_Breadcrumbs = {
  __typename?: 'PostVersion_Version_Breadcrumbs';
  doc?: Maybe<Post>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PostVersion_Version_Hero = {
  __typename?: 'PostVersion_Version_Hero';
  links?: Maybe<Array<PostVersion_Version_Hero_Links>>;
  media?: Maybe<Media>;
  richText?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<PostVersion_Version_Hero_Type>;
};

export type PostVersion_Version_HeroMediaArgs = {
  where?: InputMaybe<PostVersion_Version_Hero_Media_Where>;
};

export type PostVersion_Version_HeroRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type PostVersion_Version_Hero_Links = {
  __typename?: 'PostVersion_Version_Hero_Links';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<PostVersion_Version_Hero_Links_Link>;
};

export type PostVersion_Version_Hero_Links_Link = {
  __typename?: 'PostVersion_Version_Hero_Links_Link';
  appearance?: Maybe<PostVersion_Version_Hero_Links_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<PostVersion_Version_Hero_Links_Link_Reference_Relationship>;
  type?: Maybe<PostVersion_Version_Hero_Links_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type PostVersion_Version_Hero_Links_Link_Reference = Page;

export enum PostVersion_Version_Hero_Links_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type PostVersion_Version_Hero_Links_Link_Reference_Relationship = {
  __typename?: 'PostVersion_Version_Hero_Links_Link_Reference_Relationship';
  relationTo?: Maybe<PostVersion_Version_Hero_Links_Link_Reference_RelationTo>;
  value?: Maybe<PostVersion_Version_Hero_Links_Link_Reference>;
};

export enum PostVersion_Version_Hero_Links_Link_Appearance {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum PostVersion_Version_Hero_Links_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type PostVersion_Version_Hero_Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostVersion_Version_Hero_Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filename_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filesize_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__MimeType_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Hero_Media_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostVersion_Version_Hero_Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Hero_Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<PostVersion_Version_Hero_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PostVersion_Version_Hero_Media_Where_Or>>>;
  alt?: InputMaybe<PostVersion_Version_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Hero_Media_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Hero_Media_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Hero_Media_Width_Operator>;
};

export type PostVersion_Version_Hero_Media_Where_And = {
  alt?: InputMaybe<PostVersion_Version_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Hero_Media_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Hero_Media_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Hero_Media_Width_Operator>;
};

export type PostVersion_Version_Hero_Media_Where_Or = {
  alt?: InputMaybe<PostVersion_Version_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Hero_Media_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Hero_Media_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Hero_Media_Width_Operator>;
};

export type PostVersion_Version_Hero_Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum PostVersion_Version_Hero_Type {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type PostVersion_Version_Layout =
  | ACallToActionBlock
  | AFormBlock
  | Archive
  | Content
  | MediaBlock;

export type PostVersion_Version_Meta = {
  __typename?: 'PostVersion_Version_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type PostVersion_Version_MetaImageArgs = {
  where?: InputMaybe<PostVersion_Version_Meta_Image_Where>;
};

export type PostVersion_Version_Meta_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostVersion_Version_Meta_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator =
  {
    equals?: InputMaybe<Scalars['Float']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    greater_than?: InputMaybe<Scalars['Float']['input']>;
    greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
    less_than?: InputMaybe<Scalars['Float']['input']>;
    less_than_equal?: InputMaybe<Scalars['Float']['input']>;
    not_equals?: InputMaybe<Scalars['Float']['input']>;
  };

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator =
  {
    all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    contains?: InputMaybe<Scalars['String']['input']>;
    equals?: InputMaybe<Scalars['String']['input']>;
    exists?: InputMaybe<Scalars['Boolean']['input']>;
    in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
    like?: InputMaybe<Scalars['String']['input']>;
    not_equals?: InputMaybe<Scalars['String']['input']>;
    not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  };

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type PostVersion_Version_Meta_Image_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PostVersion_Version_Meta_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PostVersion_Version_Meta_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<PostVersion_Version_Meta_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PostVersion_Version_Meta_Image_Where_Or>>>;
  alt?: InputMaybe<PostVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Meta_Image_Width_Operator>;
};

export type PostVersion_Version_Meta_Image_Where_And = {
  alt?: InputMaybe<PostVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Meta_Image_Width_Operator>;
};

export type PostVersion_Version_Meta_Image_Where_Or = {
  alt?: InputMaybe<PostVersion_Version_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<PostVersion_Version_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<PostVersion_Version_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<PostVersion_Version_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<PostVersion_Version_Meta_Image_Height_Operator>;
  id?: InputMaybe<PostVersion_Version_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<PostVersion_Version_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<PostVersion_Version_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<PostVersion_Version_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<PostVersion_Version_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<PostVersion_Version_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<PostVersion_Version_Meta_Image_Url_Operator>;
  width?: InputMaybe<PostVersion_Version_Meta_Image_Width_Operator>;
};

export type PostVersion_Version_Meta_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum PostVersion_Version__Status {
  Draft = 'draft',
  Published = 'published',
}

export type Post_Breadcrumbs = {
  __typename?: 'Post_Breadcrumbs';
  doc?: Maybe<Post>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Post_Hero = {
  __typename?: 'Post_Hero';
  links?: Maybe<Array<Post_Hero_Links>>;
  media?: Maybe<Media>;
  richText?: Maybe<Scalars['JSON']['output']>;
  type?: Maybe<Post_Hero_Type>;
};

export type Post_HeroMediaArgs = {
  where?: InputMaybe<Post_Hero_Media_Where>;
};

export type Post_HeroRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Post_Hero_Links = {
  __typename?: 'Post_Hero_Links';
  id?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Post_Hero_Links_Link>;
};

export type Post_Hero_Links_Link = {
  __typename?: 'Post_Hero_Links_Link';
  appearance?: Maybe<Post_Hero_Links_Link_Appearance>;
  label?: Maybe<Scalars['String']['output']>;
  newTab?: Maybe<Scalars['Boolean']['output']>;
  reference?: Maybe<Post_Hero_Links_Link_Reference_Relationship>;
  type?: Maybe<Post_Hero_Links_Link_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Post_Hero_Links_Link_Reference = Page;

export type Post_Hero_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Post_Hero_Links_Link_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Post_Hero_Links_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
}

export enum Post_Hero_Links_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type Post_Hero_Links_Link_Reference_Relationship = {
  __typename?: 'Post_Hero_Links_Link_Reference_Relationship';
  relationTo?: Maybe<Post_Hero_Links_Link_Reference_RelationTo>;
  value?: Maybe<Post_Hero_Links_Link_Reference>;
};

export enum Post_Hero_Links_Link_Appearance {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Post_Hero_Links_Link_Appearance_MutationInput {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export enum Post_Hero_Links_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type Post_Hero_Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Hero_Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Hero_Media_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Hero_Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero_Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Post_Hero_Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Hero_Media_Where_Or>>>;
  alt?: InputMaybe<Post_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<Post_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<Post_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<Post_Hero_Media_Height_Operator>;
  id?: InputMaybe<Post_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<Post_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<Post_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<Post_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Hero_Media_Url_Operator>;
  width?: InputMaybe<Post_Hero_Media_Width_Operator>;
};

export type Post_Hero_Media_Where_And = {
  alt?: InputMaybe<Post_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<Post_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<Post_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<Post_Hero_Media_Height_Operator>;
  id?: InputMaybe<Post_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<Post_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<Post_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<Post_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Hero_Media_Url_Operator>;
  width?: InputMaybe<Post_Hero_Media_Width_Operator>;
};

export type Post_Hero_Media_Where_Or = {
  alt?: InputMaybe<Post_Hero_Media_Alt_Operator>;
  createdAt?: InputMaybe<Post_Hero_Media_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Hero_Media_Filename_Operator>;
  filesize?: InputMaybe<Post_Hero_Media_Filesize_Operator>;
  height?: InputMaybe<Post_Hero_Media_Height_Operator>;
  id?: InputMaybe<Post_Hero_Media_Id_Operator>;
  mimeType?: InputMaybe<Post_Hero_Media_MimeType_Operator>;
  prefix?: InputMaybe<Post_Hero_Media_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Hero_Media_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Hero_Media_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Hero_Media_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Hero_Media_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Hero_Media_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Hero_Media_Source_Operator>;
  updatedAt?: InputMaybe<Post_Hero_Media_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Hero_Media_Url_Operator>;
  width?: InputMaybe<Post_Hero_Media_Width_Operator>;
};

export type Post_Hero_Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Post_Hero_Type {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export enum Post_Hero_Type_MutationInput {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type Post_Layout =
  | ACallToActionBlock
  | AFormBlock
  | Archive
  | Content
  | MediaBlock;

export type Post_Meta = {
  __typename?: 'Post_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Post_MetaImageArgs = {
  where?: InputMaybe<Post_Meta_Image_Where>;
};

export type Post_Meta_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Meta_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Post_Meta_Image_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Meta_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Post_Meta_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Meta_Image_Where_Or>>>;
  alt?: InputMaybe<Post_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Post_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Post_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Post_Meta_Image_Height_Operator>;
  id?: InputMaybe<Post_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Post_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Post_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Post_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Meta_Image_Url_Operator>;
  width?: InputMaybe<Post_Meta_Image_Width_Operator>;
};

export type Post_Meta_Image_Where_And = {
  alt?: InputMaybe<Post_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Post_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Post_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Post_Meta_Image_Height_Operator>;
  id?: InputMaybe<Post_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Post_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Post_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Post_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Meta_Image_Url_Operator>;
  width?: InputMaybe<Post_Meta_Image_Width_Operator>;
};

export type Post_Meta_Image_Where_Or = {
  alt?: InputMaybe<Post_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Post_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Post_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Post_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Post_Meta_Image_Height_Operator>;
  id?: InputMaybe<Post_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Post_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Post_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Post_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Post_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Post_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Post_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Post_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Post_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Post_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Post_Meta_Image_Url_Operator>;
  width?: InputMaybe<Post_Meta_Image_Width_Operator>;
};

export type Post_Meta_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export enum Post__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum Post__Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export enum Post__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type Post__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Post__Status_Input>>>;
  equals?: InputMaybe<Post__Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Post__Status_Input>>>;
  not_equals?: InputMaybe<Post__Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Post__Status_Input>>>;
};

export type Post_Breadcrumbs__Doc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Breadcrumbs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Breadcrumbs__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Breadcrumbs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Hero__Links__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Post_Hero__Links__Link__Appearance_Input {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export type Post_Hero__Links__Link__Appearance_Operator = {
  all?: InputMaybe<Array<InputMaybe<Post_Hero__Links__Link__Appearance_Input>>>;
  equals?: InputMaybe<Post_Hero__Links__Link__Appearance_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Post_Hero__Links__Link__Appearance_Input>>>;
  not_equals?: InputMaybe<Post_Hero__Links__Link__Appearance_Input>;
  not_in?: InputMaybe<
    Array<InputMaybe<Post_Hero__Links__Link__Appearance_Input>>
  >;
};

export type Post_Hero__Links__Link__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero__Links__Link__NewTab_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Post_Hero__Links__Link__Reference_Relation = {
  relationTo?: InputMaybe<Post_Hero__Links__Link__Reference_Relation_RelationTo>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum Post_Hero__Links__Link__Reference_Relation_RelationTo {
  Pages = 'pages',
}

export enum Post_Hero__Links__Link__Type_Input {
  Custom = 'custom',
  Reference = 'reference',
}

export type Post_Hero__Links__Link__Type_Operator = {
  contains?: InputMaybe<Post_Hero__Links__Link__Type_Input>;
  equals?: InputMaybe<Post_Hero__Links__Link__Type_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Post_Hero__Links__Link__Type_Input>;
  not_equals?: InputMaybe<Post_Hero__Links__Link__Type_Input>;
};

export type Post_Hero__Links__Link__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Hero__Media_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Hero__RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Post_Hero__Type_Input {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type Post_Hero__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Post_Hero__Type_Input>>>;
  equals?: InputMaybe<Post_Hero__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<Post_Hero__Type_Input>>>;
  not_equals?: InputMaybe<Post_Hero__Type_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Post_Hero__Type_Input>>>;
};

export type Post_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Meta__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Post_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Post_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Post_Where = {
  AND?: InputMaybe<Array<InputMaybe<Post_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Post_Where_Or>>>;
  _status?: InputMaybe<Post__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Post_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Post_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Post_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Post_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  hero__links__id?: InputMaybe<Post_Hero__Links__Id_Operator>;
  hero__links__link__appearance?: InputMaybe<Post_Hero__Links__Link__Appearance_Operator>;
  hero__links__link__label?: InputMaybe<Post_Hero__Links__Link__Label_Operator>;
  hero__links__link__newTab?: InputMaybe<Post_Hero__Links__Link__NewTab_Operator>;
  hero__links__link__reference?: InputMaybe<Post_Hero__Links__Link__Reference_Relation>;
  hero__links__link__type?: InputMaybe<Post_Hero__Links__Link__Type_Operator>;
  hero__links__link__url?: InputMaybe<Post_Hero__Links__Link__Url_Operator>;
  hero__media?: InputMaybe<Post_Hero__Media_Operator>;
  hero__richText?: InputMaybe<Post_Hero__RichText_Operator>;
  hero__type?: InputMaybe<Post_Hero__Type_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  meta__description?: InputMaybe<Post_Meta__Description_Operator>;
  meta__image?: InputMaybe<Post_Meta__Image_Operator>;
  meta__title?: InputMaybe<Post_Meta__Title_Operator>;
  parent?: InputMaybe<Post_Parent_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  site?: InputMaybe<Post_Site_Operator>;
  slug?: InputMaybe<Post_Slug_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_And = {
  _status?: InputMaybe<Post__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Post_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Post_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Post_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Post_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  hero__links__id?: InputMaybe<Post_Hero__Links__Id_Operator>;
  hero__links__link__appearance?: InputMaybe<Post_Hero__Links__Link__Appearance_Operator>;
  hero__links__link__label?: InputMaybe<Post_Hero__Links__Link__Label_Operator>;
  hero__links__link__newTab?: InputMaybe<Post_Hero__Links__Link__NewTab_Operator>;
  hero__links__link__reference?: InputMaybe<Post_Hero__Links__Link__Reference_Relation>;
  hero__links__link__type?: InputMaybe<Post_Hero__Links__Link__Type_Operator>;
  hero__links__link__url?: InputMaybe<Post_Hero__Links__Link__Url_Operator>;
  hero__media?: InputMaybe<Post_Hero__Media_Operator>;
  hero__richText?: InputMaybe<Post_Hero__RichText_Operator>;
  hero__type?: InputMaybe<Post_Hero__Type_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  meta__description?: InputMaybe<Post_Meta__Description_Operator>;
  meta__image?: InputMaybe<Post_Meta__Image_Operator>;
  meta__title?: InputMaybe<Post_Meta__Title_Operator>;
  parent?: InputMaybe<Post_Parent_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  site?: InputMaybe<Post_Site_Operator>;
  slug?: InputMaybe<Post_Slug_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Post_Where_Or = {
  _status?: InputMaybe<Post__Status_Operator>;
  breadcrumbs__doc?: InputMaybe<Post_Breadcrumbs__Doc_Operator>;
  breadcrumbs__id?: InputMaybe<Post_Breadcrumbs__Id_Operator>;
  breadcrumbs__label?: InputMaybe<Post_Breadcrumbs__Label_Operator>;
  breadcrumbs__url?: InputMaybe<Post_Breadcrumbs__Url_Operator>;
  createdAt?: InputMaybe<Post_CreatedAt_Operator>;
  hero__links__id?: InputMaybe<Post_Hero__Links__Id_Operator>;
  hero__links__link__appearance?: InputMaybe<Post_Hero__Links__Link__Appearance_Operator>;
  hero__links__link__label?: InputMaybe<Post_Hero__Links__Link__Label_Operator>;
  hero__links__link__newTab?: InputMaybe<Post_Hero__Links__Link__NewTab_Operator>;
  hero__links__link__reference?: InputMaybe<Post_Hero__Links__Link__Reference_Relation>;
  hero__links__link__type?: InputMaybe<Post_Hero__Links__Link__Type_Operator>;
  hero__links__link__url?: InputMaybe<Post_Hero__Links__Link__Url_Operator>;
  hero__media?: InputMaybe<Post_Hero__Media_Operator>;
  hero__richText?: InputMaybe<Post_Hero__RichText_Operator>;
  hero__type?: InputMaybe<Post_Hero__Type_Operator>;
  id?: InputMaybe<Post_Id_Operator>;
  meta__description?: InputMaybe<Post_Meta__Description_Operator>;
  meta__image?: InputMaybe<Post_Meta__Image_Operator>;
  meta__title?: InputMaybe<Post_Meta__Title_Operator>;
  parent?: InputMaybe<Post_Parent_Operator>;
  publishedDate?: InputMaybe<Post_PublishedDate_Operator>;
  site?: InputMaybe<Post_Site_Operator>;
  slug?: InputMaybe<Post_Slug_Operator>;
  title?: InputMaybe<Post_Title_Operator>;
  updatedAt?: InputMaybe<Post_UpdatedAt_Operator>;
};

export type Posts = {
  __typename?: 'Posts';
  docs?: Maybe<Array<Maybe<Post>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PostsCreateAccess = {
  __typename?: 'PostsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsCreateDocAccess = {
  __typename?: 'PostsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteAccess = {
  __typename?: 'PostsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDeleteDocAccess = {
  __typename?: 'PostsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsDocAccessFields = {
  __typename?: 'PostsDocAccessFields';
  _status?: Maybe<PostsDocAccessFields__Status>;
  breadcrumbs?: Maybe<PostsDocAccessFields_Breadcrumbs>;
  createdAt?: Maybe<PostsDocAccessFields_CreatedAt>;
  hero?: Maybe<PostsDocAccessFields_Hero>;
  layout?: Maybe<PostsDocAccessFields_Layout>;
  meta?: Maybe<PostsDocAccessFields_Meta>;
  parent?: Maybe<PostsDocAccessFields_Parent>;
  publishedDate?: Maybe<PostsDocAccessFields_PublishedDate>;
  site?: Maybe<PostsDocAccessFields_Site>;
  slug?: Maybe<PostsDocAccessFields_Slug>;
  title?: Maybe<PostsDocAccessFields_Title>;
  updatedAt?: Maybe<PostsDocAccessFields_UpdatedAt>;
};

export type PostsDocAccessFields__Status = {
  __typename?: 'PostsDocAccessFields__status';
  create?: Maybe<PostsDocAccessFields__Status_Create>;
  delete?: Maybe<PostsDocAccessFields__Status_Delete>;
  read?: Maybe<PostsDocAccessFields__Status_Read>;
  update?: Maybe<PostsDocAccessFields__Status_Update>;
};

export type PostsDocAccessFields__Status_Create = {
  __typename?: 'PostsDocAccessFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Delete = {
  __typename?: 'PostsDocAccessFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Read = {
  __typename?: 'PostsDocAccessFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields__Status_Update = {
  __typename?: 'PostsDocAccessFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs = {
  __typename?: 'PostsDocAccessFields_breadcrumbs';
  create?: Maybe<PostsDocAccessFields_Breadcrumbs_Create>;
  delete?: Maybe<PostsDocAccessFields_Breadcrumbs_Delete>;
  fields?: Maybe<PostsDocAccessFields_Breadcrumbs_Fields>;
  read?: Maybe<PostsDocAccessFields_Breadcrumbs_Read>;
  update?: Maybe<PostsDocAccessFields_Breadcrumbs_Update>;
};

export type PostsDocAccessFields_Breadcrumbs_Create = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Delete = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Fields = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_Fields';
  doc?: Maybe<PostsDocAccessFields_Breadcrumbs_Doc>;
  id?: Maybe<PostsDocAccessFields_Breadcrumbs_Id>;
  label?: Maybe<PostsDocAccessFields_Breadcrumbs_Label>;
  url?: Maybe<PostsDocAccessFields_Breadcrumbs_Url>;
};

export type PostsDocAccessFields_Breadcrumbs_Read = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Update = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Doc = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_doc';
  create?: Maybe<PostsDocAccessFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<PostsDocAccessFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<PostsDocAccessFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<PostsDocAccessFields_Breadcrumbs_Doc_Update>;
};

export type PostsDocAccessFields_Breadcrumbs_Doc_Create = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Doc_Read = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Doc_Update = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Id = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_id';
  create?: Maybe<PostsDocAccessFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<PostsDocAccessFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<PostsDocAccessFields_Breadcrumbs_Id_Read>;
  update?: Maybe<PostsDocAccessFields_Breadcrumbs_Id_Update>;
};

export type PostsDocAccessFields_Breadcrumbs_Id_Create = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Id_Delete = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Id_Read = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Id_Update = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Label = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_label';
  create?: Maybe<PostsDocAccessFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<PostsDocAccessFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<PostsDocAccessFields_Breadcrumbs_Label_Read>;
  update?: Maybe<PostsDocAccessFields_Breadcrumbs_Label_Update>;
};

export type PostsDocAccessFields_Breadcrumbs_Label_Create = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Label_Delete = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Label_Read = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Label_Update = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Url = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_url';
  create?: Maybe<PostsDocAccessFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<PostsDocAccessFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<PostsDocAccessFields_Breadcrumbs_Url_Read>;
  update?: Maybe<PostsDocAccessFields_Breadcrumbs_Url_Update>;
};

export type PostsDocAccessFields_Breadcrumbs_Url_Create = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Url_Delete = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Url_Read = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Breadcrumbs_Url_Update = {
  __typename?: 'PostsDocAccessFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt = {
  __typename?: 'PostsDocAccessFields_createdAt';
  create?: Maybe<PostsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_CreatedAt_Update>;
};

export type PostsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PostsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PostsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PostsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero = {
  __typename?: 'PostsDocAccessFields_hero';
  create?: Maybe<PostsDocAccessFields_Hero_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Delete>;
  fields?: Maybe<PostsDocAccessFields_Hero_Fields>;
  read?: Maybe<PostsDocAccessFields_Hero_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Update>;
};

export type PostsDocAccessFields_Hero_Create = {
  __typename?: 'PostsDocAccessFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Delete = {
  __typename?: 'PostsDocAccessFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Fields = {
  __typename?: 'PostsDocAccessFields_hero_Fields';
  links?: Maybe<PostsDocAccessFields_Hero_Links>;
  media?: Maybe<PostsDocAccessFields_Hero_Media>;
  richText?: Maybe<PostsDocAccessFields_Hero_RichText>;
  type?: Maybe<PostsDocAccessFields_Hero_Type>;
};

export type PostsDocAccessFields_Hero_Read = {
  __typename?: 'PostsDocAccessFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Update = {
  __typename?: 'PostsDocAccessFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links = {
  __typename?: 'PostsDocAccessFields_hero_links';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Delete>;
  fields?: Maybe<PostsDocAccessFields_Hero_Links_Fields>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Update>;
};

export type PostsDocAccessFields_Hero_Links_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Fields = {
  __typename?: 'PostsDocAccessFields_hero_links_Fields';
  id?: Maybe<PostsDocAccessFields_Hero_Links_Id>;
  link?: Maybe<PostsDocAccessFields_Hero_Links_Link>;
};

export type PostsDocAccessFields_Hero_Links_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Id = {
  __typename?: 'PostsDocAccessFields_hero_links_id';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Id_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Id_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Id_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Id_Update>;
};

export type PostsDocAccessFields_Hero_Links_Id_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Id_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Id_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Id_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link = {
  __typename?: 'PostsDocAccessFields_hero_links_link';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Delete>;
  fields?: Maybe<PostsDocAccessFields_Hero_Links_Link_Fields>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Fields = {
  __typename?: 'PostsDocAccessFields_hero_links_link_Fields';
  appearance?: Maybe<PostsDocAccessFields_Hero_Links_Link_Appearance>;
  label?: Maybe<PostsDocAccessFields_Hero_Links_Link_Label>;
  newTab?: Maybe<PostsDocAccessFields_Hero_Links_Link_NewTab>;
  reference?: Maybe<PostsDocAccessFields_Hero_Links_Link_Reference>;
  type?: Maybe<PostsDocAccessFields_Hero_Links_Link_Type>;
  url?: Maybe<PostsDocAccessFields_Hero_Links_Link_Url>;
};

export type PostsDocAccessFields_Hero_Links_Link_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Appearance = {
  __typename?: 'PostsDocAccessFields_hero_links_link_appearance';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Appearance_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Appearance_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Appearance_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Appearance_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Appearance_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_appearance_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Appearance_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_appearance_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Appearance_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_appearance_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Appearance_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_appearance_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Label = {
  __typename?: 'PostsDocAccessFields_hero_links_link_label';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Label_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Label_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Label_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Label_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Label_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Label_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Label_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Label_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_NewTab = {
  __typename?: 'PostsDocAccessFields_hero_links_link_newTab';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_NewTab_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_NewTab_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_NewTab_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_NewTab_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_NewTab_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_NewTab_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_NewTab_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_NewTab_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Reference = {
  __typename?: 'PostsDocAccessFields_hero_links_link_reference';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Reference_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Reference_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Reference_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Reference_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Reference_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Reference_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Reference_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Reference_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Type = {
  __typename?: 'PostsDocAccessFields_hero_links_link_type';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Type_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Type_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Type_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Type_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Type_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Type_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Type_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Type_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Url = {
  __typename?: 'PostsDocAccessFields_hero_links_link_url';
  create?: Maybe<PostsDocAccessFields_Hero_Links_Link_Url_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Links_Link_Url_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Links_Link_Url_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Links_Link_Url_Update>;
};

export type PostsDocAccessFields_Hero_Links_Link_Url_Create = {
  __typename?: 'PostsDocAccessFields_hero_links_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Url_Delete = {
  __typename?: 'PostsDocAccessFields_hero_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Url_Read = {
  __typename?: 'PostsDocAccessFields_hero_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Links_Link_Url_Update = {
  __typename?: 'PostsDocAccessFields_hero_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Media = {
  __typename?: 'PostsDocAccessFields_hero_media';
  create?: Maybe<PostsDocAccessFields_Hero_Media_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Media_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Media_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Media_Update>;
};

export type PostsDocAccessFields_Hero_Media_Create = {
  __typename?: 'PostsDocAccessFields_hero_media_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Media_Delete = {
  __typename?: 'PostsDocAccessFields_hero_media_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Media_Read = {
  __typename?: 'PostsDocAccessFields_hero_media_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Media_Update = {
  __typename?: 'PostsDocAccessFields_hero_media_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_RichText = {
  __typename?: 'PostsDocAccessFields_hero_richText';
  create?: Maybe<PostsDocAccessFields_Hero_RichText_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_RichText_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_RichText_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_RichText_Update>;
};

export type PostsDocAccessFields_Hero_RichText_Create = {
  __typename?: 'PostsDocAccessFields_hero_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_RichText_Delete = {
  __typename?: 'PostsDocAccessFields_hero_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_RichText_Read = {
  __typename?: 'PostsDocAccessFields_hero_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_RichText_Update = {
  __typename?: 'PostsDocAccessFields_hero_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Type = {
  __typename?: 'PostsDocAccessFields_hero_type';
  create?: Maybe<PostsDocAccessFields_Hero_Type_Create>;
  delete?: Maybe<PostsDocAccessFields_Hero_Type_Delete>;
  read?: Maybe<PostsDocAccessFields_Hero_Type_Read>;
  update?: Maybe<PostsDocAccessFields_Hero_Type_Update>;
};

export type PostsDocAccessFields_Hero_Type_Create = {
  __typename?: 'PostsDocAccessFields_hero_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Type_Delete = {
  __typename?: 'PostsDocAccessFields_hero_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Type_Read = {
  __typename?: 'PostsDocAccessFields_hero_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Hero_Type_Update = {
  __typename?: 'PostsDocAccessFields_hero_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Layout = {
  __typename?: 'PostsDocAccessFields_layout';
  create?: Maybe<PostsDocAccessFields_Layout_Create>;
  delete?: Maybe<PostsDocAccessFields_Layout_Delete>;
  read?: Maybe<PostsDocAccessFields_Layout_Read>;
  update?: Maybe<PostsDocAccessFields_Layout_Update>;
};

export type PostsDocAccessFields_Layout_Create = {
  __typename?: 'PostsDocAccessFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Layout_Delete = {
  __typename?: 'PostsDocAccessFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Layout_Read = {
  __typename?: 'PostsDocAccessFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Layout_Update = {
  __typename?: 'PostsDocAccessFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta = {
  __typename?: 'PostsDocAccessFields_meta';
  create?: Maybe<PostsDocAccessFields_Meta_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Delete>;
  fields?: Maybe<PostsDocAccessFields_Meta_Fields>;
  read?: Maybe<PostsDocAccessFields_Meta_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Update>;
};

export type PostsDocAccessFields_Meta_Create = {
  __typename?: 'PostsDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Delete = {
  __typename?: 'PostsDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Fields = {
  __typename?: 'PostsDocAccessFields_meta_Fields';
  description?: Maybe<PostsDocAccessFields_Meta_Description>;
  image?: Maybe<PostsDocAccessFields_Meta_Image>;
  overview?: Maybe<PostsDocAccessFields_Meta_Overview>;
  preview?: Maybe<PostsDocAccessFields_Meta_Preview>;
  title?: Maybe<PostsDocAccessFields_Meta_Title>;
};

export type PostsDocAccessFields_Meta_Read = {
  __typename?: 'PostsDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Update = {
  __typename?: 'PostsDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Description = {
  __typename?: 'PostsDocAccessFields_meta_description';
  create?: Maybe<PostsDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<PostsDocAccessFields_Meta_Description_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Description_Update>;
};

export type PostsDocAccessFields_Meta_Description_Create = {
  __typename?: 'PostsDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PostsDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Description_Read = {
  __typename?: 'PostsDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Description_Update = {
  __typename?: 'PostsDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Image = {
  __typename?: 'PostsDocAccessFields_meta_image';
  create?: Maybe<PostsDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<PostsDocAccessFields_Meta_Image_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Image_Update>;
};

export type PostsDocAccessFields_Meta_Image_Create = {
  __typename?: 'PostsDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PostsDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Image_Read = {
  __typename?: 'PostsDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Image_Update = {
  __typename?: 'PostsDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Overview = {
  __typename?: 'PostsDocAccessFields_meta_overview';
  create?: Maybe<PostsDocAccessFields_Meta_Overview_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Overview_Delete>;
  read?: Maybe<PostsDocAccessFields_Meta_Overview_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Overview_Update>;
};

export type PostsDocAccessFields_Meta_Overview_Create = {
  __typename?: 'PostsDocAccessFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Overview_Delete = {
  __typename?: 'PostsDocAccessFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Overview_Read = {
  __typename?: 'PostsDocAccessFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Overview_Update = {
  __typename?: 'PostsDocAccessFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Preview = {
  __typename?: 'PostsDocAccessFields_meta_preview';
  create?: Maybe<PostsDocAccessFields_Meta_Preview_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Preview_Delete>;
  read?: Maybe<PostsDocAccessFields_Meta_Preview_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Preview_Update>;
};

export type PostsDocAccessFields_Meta_Preview_Create = {
  __typename?: 'PostsDocAccessFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Preview_Delete = {
  __typename?: 'PostsDocAccessFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Preview_Read = {
  __typename?: 'PostsDocAccessFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Preview_Update = {
  __typename?: 'PostsDocAccessFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Title = {
  __typename?: 'PostsDocAccessFields_meta_title';
  create?: Maybe<PostsDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<PostsDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<PostsDocAccessFields_Meta_Title_Read>;
  update?: Maybe<PostsDocAccessFields_Meta_Title_Update>;
};

export type PostsDocAccessFields_Meta_Title_Create = {
  __typename?: 'PostsDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PostsDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Title_Read = {
  __typename?: 'PostsDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Meta_Title_Update = {
  __typename?: 'PostsDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Parent = {
  __typename?: 'PostsDocAccessFields_parent';
  create?: Maybe<PostsDocAccessFields_Parent_Create>;
  delete?: Maybe<PostsDocAccessFields_Parent_Delete>;
  read?: Maybe<PostsDocAccessFields_Parent_Read>;
  update?: Maybe<PostsDocAccessFields_Parent_Update>;
};

export type PostsDocAccessFields_Parent_Create = {
  __typename?: 'PostsDocAccessFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Parent_Delete = {
  __typename?: 'PostsDocAccessFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Parent_Read = {
  __typename?: 'PostsDocAccessFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Parent_Update = {
  __typename?: 'PostsDocAccessFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedDate = {
  __typename?: 'PostsDocAccessFields_publishedDate';
  create?: Maybe<PostsDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<PostsDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<PostsDocAccessFields_PublishedDate_Read>;
  update?: Maybe<PostsDocAccessFields_PublishedDate_Update>;
};

export type PostsDocAccessFields_PublishedDate_Create = {
  __typename?: 'PostsDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedDate_Delete = {
  __typename?: 'PostsDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedDate_Read = {
  __typename?: 'PostsDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_PublishedDate_Update = {
  __typename?: 'PostsDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Site = {
  __typename?: 'PostsDocAccessFields_site';
  create?: Maybe<PostsDocAccessFields_Site_Create>;
  delete?: Maybe<PostsDocAccessFields_Site_Delete>;
  read?: Maybe<PostsDocAccessFields_Site_Read>;
  update?: Maybe<PostsDocAccessFields_Site_Update>;
};

export type PostsDocAccessFields_Site_Create = {
  __typename?: 'PostsDocAccessFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Site_Delete = {
  __typename?: 'PostsDocAccessFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Site_Read = {
  __typename?: 'PostsDocAccessFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Site_Update = {
  __typename?: 'PostsDocAccessFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug = {
  __typename?: 'PostsDocAccessFields_slug';
  create?: Maybe<PostsDocAccessFields_Slug_Create>;
  delete?: Maybe<PostsDocAccessFields_Slug_Delete>;
  read?: Maybe<PostsDocAccessFields_Slug_Read>;
  update?: Maybe<PostsDocAccessFields_Slug_Update>;
};

export type PostsDocAccessFields_Slug_Create = {
  __typename?: 'PostsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Delete = {
  __typename?: 'PostsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Read = {
  __typename?: 'PostsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Slug_Update = {
  __typename?: 'PostsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title = {
  __typename?: 'PostsDocAccessFields_title';
  create?: Maybe<PostsDocAccessFields_Title_Create>;
  delete?: Maybe<PostsDocAccessFields_Title_Delete>;
  read?: Maybe<PostsDocAccessFields_Title_Read>;
  update?: Maybe<PostsDocAccessFields_Title_Update>;
};

export type PostsDocAccessFields_Title_Create = {
  __typename?: 'PostsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Delete = {
  __typename?: 'PostsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Read = {
  __typename?: 'PostsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_Title_Update = {
  __typename?: 'PostsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt = {
  __typename?: 'PostsDocAccessFields_updatedAt';
  create?: Maybe<PostsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PostsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PostsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PostsDocAccessFields_UpdatedAt_Update>;
};

export type PostsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PostsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PostsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PostsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PostsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields = {
  __typename?: 'PostsFields';
  _status?: Maybe<PostsFields__Status>;
  breadcrumbs?: Maybe<PostsFields_Breadcrumbs>;
  createdAt?: Maybe<PostsFields_CreatedAt>;
  hero?: Maybe<PostsFields_Hero>;
  layout?: Maybe<PostsFields_Layout>;
  meta?: Maybe<PostsFields_Meta>;
  parent?: Maybe<PostsFields_Parent>;
  publishedDate?: Maybe<PostsFields_PublishedDate>;
  site?: Maybe<PostsFields_Site>;
  slug?: Maybe<PostsFields_Slug>;
  title?: Maybe<PostsFields_Title>;
  updatedAt?: Maybe<PostsFields_UpdatedAt>;
};

export type PostsFields__Status = {
  __typename?: 'PostsFields__status';
  create?: Maybe<PostsFields__Status_Create>;
  delete?: Maybe<PostsFields__Status_Delete>;
  read?: Maybe<PostsFields__Status_Read>;
  update?: Maybe<PostsFields__Status_Update>;
};

export type PostsFields__Status_Create = {
  __typename?: 'PostsFields__status_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Delete = {
  __typename?: 'PostsFields__status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Read = {
  __typename?: 'PostsFields__status_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields__Status_Update = {
  __typename?: 'PostsFields__status_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs = {
  __typename?: 'PostsFields_breadcrumbs';
  create?: Maybe<PostsFields_Breadcrumbs_Create>;
  delete?: Maybe<PostsFields_Breadcrumbs_Delete>;
  fields?: Maybe<PostsFields_Breadcrumbs_Fields>;
  read?: Maybe<PostsFields_Breadcrumbs_Read>;
  update?: Maybe<PostsFields_Breadcrumbs_Update>;
};

export type PostsFields_Breadcrumbs_Create = {
  __typename?: 'PostsFields_breadcrumbs_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Delete = {
  __typename?: 'PostsFields_breadcrumbs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Fields = {
  __typename?: 'PostsFields_breadcrumbs_Fields';
  doc?: Maybe<PostsFields_Breadcrumbs_Doc>;
  id?: Maybe<PostsFields_Breadcrumbs_Id>;
  label?: Maybe<PostsFields_Breadcrumbs_Label>;
  url?: Maybe<PostsFields_Breadcrumbs_Url>;
};

export type PostsFields_Breadcrumbs_Read = {
  __typename?: 'PostsFields_breadcrumbs_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Update = {
  __typename?: 'PostsFields_breadcrumbs_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Doc = {
  __typename?: 'PostsFields_breadcrumbs_doc';
  create?: Maybe<PostsFields_Breadcrumbs_Doc_Create>;
  delete?: Maybe<PostsFields_Breadcrumbs_Doc_Delete>;
  read?: Maybe<PostsFields_Breadcrumbs_Doc_Read>;
  update?: Maybe<PostsFields_Breadcrumbs_Doc_Update>;
};

export type PostsFields_Breadcrumbs_Doc_Create = {
  __typename?: 'PostsFields_breadcrumbs_doc_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Doc_Delete = {
  __typename?: 'PostsFields_breadcrumbs_doc_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Doc_Read = {
  __typename?: 'PostsFields_breadcrumbs_doc_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Doc_Update = {
  __typename?: 'PostsFields_breadcrumbs_doc_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Id = {
  __typename?: 'PostsFields_breadcrumbs_id';
  create?: Maybe<PostsFields_Breadcrumbs_Id_Create>;
  delete?: Maybe<PostsFields_Breadcrumbs_Id_Delete>;
  read?: Maybe<PostsFields_Breadcrumbs_Id_Read>;
  update?: Maybe<PostsFields_Breadcrumbs_Id_Update>;
};

export type PostsFields_Breadcrumbs_Id_Create = {
  __typename?: 'PostsFields_breadcrumbs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Id_Delete = {
  __typename?: 'PostsFields_breadcrumbs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Id_Read = {
  __typename?: 'PostsFields_breadcrumbs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Id_Update = {
  __typename?: 'PostsFields_breadcrumbs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Label = {
  __typename?: 'PostsFields_breadcrumbs_label';
  create?: Maybe<PostsFields_Breadcrumbs_Label_Create>;
  delete?: Maybe<PostsFields_Breadcrumbs_Label_Delete>;
  read?: Maybe<PostsFields_Breadcrumbs_Label_Read>;
  update?: Maybe<PostsFields_Breadcrumbs_Label_Update>;
};

export type PostsFields_Breadcrumbs_Label_Create = {
  __typename?: 'PostsFields_breadcrumbs_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Label_Delete = {
  __typename?: 'PostsFields_breadcrumbs_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Label_Read = {
  __typename?: 'PostsFields_breadcrumbs_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Label_Update = {
  __typename?: 'PostsFields_breadcrumbs_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Url = {
  __typename?: 'PostsFields_breadcrumbs_url';
  create?: Maybe<PostsFields_Breadcrumbs_Url_Create>;
  delete?: Maybe<PostsFields_Breadcrumbs_Url_Delete>;
  read?: Maybe<PostsFields_Breadcrumbs_Url_Read>;
  update?: Maybe<PostsFields_Breadcrumbs_Url_Update>;
};

export type PostsFields_Breadcrumbs_Url_Create = {
  __typename?: 'PostsFields_breadcrumbs_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Url_Delete = {
  __typename?: 'PostsFields_breadcrumbs_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Url_Read = {
  __typename?: 'PostsFields_breadcrumbs_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Breadcrumbs_Url_Update = {
  __typename?: 'PostsFields_breadcrumbs_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt = {
  __typename?: 'PostsFields_createdAt';
  create?: Maybe<PostsFields_CreatedAt_Create>;
  delete?: Maybe<PostsFields_CreatedAt_Delete>;
  read?: Maybe<PostsFields_CreatedAt_Read>;
  update?: Maybe<PostsFields_CreatedAt_Update>;
};

export type PostsFields_CreatedAt_Create = {
  __typename?: 'PostsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Delete = {
  __typename?: 'PostsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Read = {
  __typename?: 'PostsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_CreatedAt_Update = {
  __typename?: 'PostsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero = {
  __typename?: 'PostsFields_hero';
  create?: Maybe<PostsFields_Hero_Create>;
  delete?: Maybe<PostsFields_Hero_Delete>;
  fields?: Maybe<PostsFields_Hero_Fields>;
  read?: Maybe<PostsFields_Hero_Read>;
  update?: Maybe<PostsFields_Hero_Update>;
};

export type PostsFields_Hero_Create = {
  __typename?: 'PostsFields_hero_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Delete = {
  __typename?: 'PostsFields_hero_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Fields = {
  __typename?: 'PostsFields_hero_Fields';
  links?: Maybe<PostsFields_Hero_Links>;
  media?: Maybe<PostsFields_Hero_Media>;
  richText?: Maybe<PostsFields_Hero_RichText>;
  type?: Maybe<PostsFields_Hero_Type>;
};

export type PostsFields_Hero_Read = {
  __typename?: 'PostsFields_hero_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Update = {
  __typename?: 'PostsFields_hero_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links = {
  __typename?: 'PostsFields_hero_links';
  create?: Maybe<PostsFields_Hero_Links_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Delete>;
  fields?: Maybe<PostsFields_Hero_Links_Fields>;
  read?: Maybe<PostsFields_Hero_Links_Read>;
  update?: Maybe<PostsFields_Hero_Links_Update>;
};

export type PostsFields_Hero_Links_Create = {
  __typename?: 'PostsFields_hero_links_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Delete = {
  __typename?: 'PostsFields_hero_links_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Fields = {
  __typename?: 'PostsFields_hero_links_Fields';
  id?: Maybe<PostsFields_Hero_Links_Id>;
  link?: Maybe<PostsFields_Hero_Links_Link>;
};

export type PostsFields_Hero_Links_Read = {
  __typename?: 'PostsFields_hero_links_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Update = {
  __typename?: 'PostsFields_hero_links_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Id = {
  __typename?: 'PostsFields_hero_links_id';
  create?: Maybe<PostsFields_Hero_Links_Id_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Id_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Id_Read>;
  update?: Maybe<PostsFields_Hero_Links_Id_Update>;
};

export type PostsFields_Hero_Links_Id_Create = {
  __typename?: 'PostsFields_hero_links_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Id_Delete = {
  __typename?: 'PostsFields_hero_links_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Id_Read = {
  __typename?: 'PostsFields_hero_links_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Id_Update = {
  __typename?: 'PostsFields_hero_links_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link = {
  __typename?: 'PostsFields_hero_links_link';
  create?: Maybe<PostsFields_Hero_Links_Link_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Delete>;
  fields?: Maybe<PostsFields_Hero_Links_Link_Fields>;
  read?: Maybe<PostsFields_Hero_Links_Link_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Update>;
};

export type PostsFields_Hero_Links_Link_Create = {
  __typename?: 'PostsFields_hero_links_link_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Delete = {
  __typename?: 'PostsFields_hero_links_link_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Fields = {
  __typename?: 'PostsFields_hero_links_link_Fields';
  appearance?: Maybe<PostsFields_Hero_Links_Link_Appearance>;
  label?: Maybe<PostsFields_Hero_Links_Link_Label>;
  newTab?: Maybe<PostsFields_Hero_Links_Link_NewTab>;
  reference?: Maybe<PostsFields_Hero_Links_Link_Reference>;
  type?: Maybe<PostsFields_Hero_Links_Link_Type>;
  url?: Maybe<PostsFields_Hero_Links_Link_Url>;
};

export type PostsFields_Hero_Links_Link_Read = {
  __typename?: 'PostsFields_hero_links_link_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Update = {
  __typename?: 'PostsFields_hero_links_link_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Appearance = {
  __typename?: 'PostsFields_hero_links_link_appearance';
  create?: Maybe<PostsFields_Hero_Links_Link_Appearance_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Appearance_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_Appearance_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Appearance_Update>;
};

export type PostsFields_Hero_Links_Link_Appearance_Create = {
  __typename?: 'PostsFields_hero_links_link_appearance_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Appearance_Delete = {
  __typename?: 'PostsFields_hero_links_link_appearance_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Appearance_Read = {
  __typename?: 'PostsFields_hero_links_link_appearance_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Appearance_Update = {
  __typename?: 'PostsFields_hero_links_link_appearance_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Label = {
  __typename?: 'PostsFields_hero_links_link_label';
  create?: Maybe<PostsFields_Hero_Links_Link_Label_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Label_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_Label_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Label_Update>;
};

export type PostsFields_Hero_Links_Link_Label_Create = {
  __typename?: 'PostsFields_hero_links_link_label_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Label_Delete = {
  __typename?: 'PostsFields_hero_links_link_label_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Label_Read = {
  __typename?: 'PostsFields_hero_links_link_label_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Label_Update = {
  __typename?: 'PostsFields_hero_links_link_label_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_NewTab = {
  __typename?: 'PostsFields_hero_links_link_newTab';
  create?: Maybe<PostsFields_Hero_Links_Link_NewTab_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_NewTab_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_NewTab_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_NewTab_Update>;
};

export type PostsFields_Hero_Links_Link_NewTab_Create = {
  __typename?: 'PostsFields_hero_links_link_newTab_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_NewTab_Delete = {
  __typename?: 'PostsFields_hero_links_link_newTab_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_NewTab_Read = {
  __typename?: 'PostsFields_hero_links_link_newTab_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_NewTab_Update = {
  __typename?: 'PostsFields_hero_links_link_newTab_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Reference = {
  __typename?: 'PostsFields_hero_links_link_reference';
  create?: Maybe<PostsFields_Hero_Links_Link_Reference_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Reference_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_Reference_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Reference_Update>;
};

export type PostsFields_Hero_Links_Link_Reference_Create = {
  __typename?: 'PostsFields_hero_links_link_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Reference_Delete = {
  __typename?: 'PostsFields_hero_links_link_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Reference_Read = {
  __typename?: 'PostsFields_hero_links_link_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Reference_Update = {
  __typename?: 'PostsFields_hero_links_link_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Type = {
  __typename?: 'PostsFields_hero_links_link_type';
  create?: Maybe<PostsFields_Hero_Links_Link_Type_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Type_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_Type_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Type_Update>;
};

export type PostsFields_Hero_Links_Link_Type_Create = {
  __typename?: 'PostsFields_hero_links_link_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Type_Delete = {
  __typename?: 'PostsFields_hero_links_link_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Type_Read = {
  __typename?: 'PostsFields_hero_links_link_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Type_Update = {
  __typename?: 'PostsFields_hero_links_link_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Url = {
  __typename?: 'PostsFields_hero_links_link_url';
  create?: Maybe<PostsFields_Hero_Links_Link_Url_Create>;
  delete?: Maybe<PostsFields_Hero_Links_Link_Url_Delete>;
  read?: Maybe<PostsFields_Hero_Links_Link_Url_Read>;
  update?: Maybe<PostsFields_Hero_Links_Link_Url_Update>;
};

export type PostsFields_Hero_Links_Link_Url_Create = {
  __typename?: 'PostsFields_hero_links_link_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Url_Delete = {
  __typename?: 'PostsFields_hero_links_link_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Url_Read = {
  __typename?: 'PostsFields_hero_links_link_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Links_Link_Url_Update = {
  __typename?: 'PostsFields_hero_links_link_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Media = {
  __typename?: 'PostsFields_hero_media';
  create?: Maybe<PostsFields_Hero_Media_Create>;
  delete?: Maybe<PostsFields_Hero_Media_Delete>;
  read?: Maybe<PostsFields_Hero_Media_Read>;
  update?: Maybe<PostsFields_Hero_Media_Update>;
};

export type PostsFields_Hero_Media_Create = {
  __typename?: 'PostsFields_hero_media_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Media_Delete = {
  __typename?: 'PostsFields_hero_media_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Media_Read = {
  __typename?: 'PostsFields_hero_media_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Media_Update = {
  __typename?: 'PostsFields_hero_media_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_RichText = {
  __typename?: 'PostsFields_hero_richText';
  create?: Maybe<PostsFields_Hero_RichText_Create>;
  delete?: Maybe<PostsFields_Hero_RichText_Delete>;
  read?: Maybe<PostsFields_Hero_RichText_Read>;
  update?: Maybe<PostsFields_Hero_RichText_Update>;
};

export type PostsFields_Hero_RichText_Create = {
  __typename?: 'PostsFields_hero_richText_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_RichText_Delete = {
  __typename?: 'PostsFields_hero_richText_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_RichText_Read = {
  __typename?: 'PostsFields_hero_richText_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_RichText_Update = {
  __typename?: 'PostsFields_hero_richText_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Type = {
  __typename?: 'PostsFields_hero_type';
  create?: Maybe<PostsFields_Hero_Type_Create>;
  delete?: Maybe<PostsFields_Hero_Type_Delete>;
  read?: Maybe<PostsFields_Hero_Type_Read>;
  update?: Maybe<PostsFields_Hero_Type_Update>;
};

export type PostsFields_Hero_Type_Create = {
  __typename?: 'PostsFields_hero_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Type_Delete = {
  __typename?: 'PostsFields_hero_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Type_Read = {
  __typename?: 'PostsFields_hero_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Hero_Type_Update = {
  __typename?: 'PostsFields_hero_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Layout = {
  __typename?: 'PostsFields_layout';
  create?: Maybe<PostsFields_Layout_Create>;
  delete?: Maybe<PostsFields_Layout_Delete>;
  read?: Maybe<PostsFields_Layout_Read>;
  update?: Maybe<PostsFields_Layout_Update>;
};

export type PostsFields_Layout_Create = {
  __typename?: 'PostsFields_layout_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Layout_Delete = {
  __typename?: 'PostsFields_layout_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Layout_Read = {
  __typename?: 'PostsFields_layout_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Layout_Update = {
  __typename?: 'PostsFields_layout_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta = {
  __typename?: 'PostsFields_meta';
  create?: Maybe<PostsFields_Meta_Create>;
  delete?: Maybe<PostsFields_Meta_Delete>;
  fields?: Maybe<PostsFields_Meta_Fields>;
  read?: Maybe<PostsFields_Meta_Read>;
  update?: Maybe<PostsFields_Meta_Update>;
};

export type PostsFields_Meta_Create = {
  __typename?: 'PostsFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Delete = {
  __typename?: 'PostsFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Fields = {
  __typename?: 'PostsFields_meta_Fields';
  description?: Maybe<PostsFields_Meta_Description>;
  image?: Maybe<PostsFields_Meta_Image>;
  overview?: Maybe<PostsFields_Meta_Overview>;
  preview?: Maybe<PostsFields_Meta_Preview>;
  title?: Maybe<PostsFields_Meta_Title>;
};

export type PostsFields_Meta_Read = {
  __typename?: 'PostsFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Update = {
  __typename?: 'PostsFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Description = {
  __typename?: 'PostsFields_meta_description';
  create?: Maybe<PostsFields_Meta_Description_Create>;
  delete?: Maybe<PostsFields_Meta_Description_Delete>;
  read?: Maybe<PostsFields_Meta_Description_Read>;
  update?: Maybe<PostsFields_Meta_Description_Update>;
};

export type PostsFields_Meta_Description_Create = {
  __typename?: 'PostsFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Description_Delete = {
  __typename?: 'PostsFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Description_Read = {
  __typename?: 'PostsFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Description_Update = {
  __typename?: 'PostsFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Image = {
  __typename?: 'PostsFields_meta_image';
  create?: Maybe<PostsFields_Meta_Image_Create>;
  delete?: Maybe<PostsFields_Meta_Image_Delete>;
  read?: Maybe<PostsFields_Meta_Image_Read>;
  update?: Maybe<PostsFields_Meta_Image_Update>;
};

export type PostsFields_Meta_Image_Create = {
  __typename?: 'PostsFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Image_Delete = {
  __typename?: 'PostsFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Image_Read = {
  __typename?: 'PostsFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Image_Update = {
  __typename?: 'PostsFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Overview = {
  __typename?: 'PostsFields_meta_overview';
  create?: Maybe<PostsFields_Meta_Overview_Create>;
  delete?: Maybe<PostsFields_Meta_Overview_Delete>;
  read?: Maybe<PostsFields_Meta_Overview_Read>;
  update?: Maybe<PostsFields_Meta_Overview_Update>;
};

export type PostsFields_Meta_Overview_Create = {
  __typename?: 'PostsFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Overview_Delete = {
  __typename?: 'PostsFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Overview_Read = {
  __typename?: 'PostsFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Overview_Update = {
  __typename?: 'PostsFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Preview = {
  __typename?: 'PostsFields_meta_preview';
  create?: Maybe<PostsFields_Meta_Preview_Create>;
  delete?: Maybe<PostsFields_Meta_Preview_Delete>;
  read?: Maybe<PostsFields_Meta_Preview_Read>;
  update?: Maybe<PostsFields_Meta_Preview_Update>;
};

export type PostsFields_Meta_Preview_Create = {
  __typename?: 'PostsFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Preview_Delete = {
  __typename?: 'PostsFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Preview_Read = {
  __typename?: 'PostsFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Preview_Update = {
  __typename?: 'PostsFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Title = {
  __typename?: 'PostsFields_meta_title';
  create?: Maybe<PostsFields_Meta_Title_Create>;
  delete?: Maybe<PostsFields_Meta_Title_Delete>;
  read?: Maybe<PostsFields_Meta_Title_Read>;
  update?: Maybe<PostsFields_Meta_Title_Update>;
};

export type PostsFields_Meta_Title_Create = {
  __typename?: 'PostsFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Title_Delete = {
  __typename?: 'PostsFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Title_Read = {
  __typename?: 'PostsFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Meta_Title_Update = {
  __typename?: 'PostsFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Parent = {
  __typename?: 'PostsFields_parent';
  create?: Maybe<PostsFields_Parent_Create>;
  delete?: Maybe<PostsFields_Parent_Delete>;
  read?: Maybe<PostsFields_Parent_Read>;
  update?: Maybe<PostsFields_Parent_Update>;
};

export type PostsFields_Parent_Create = {
  __typename?: 'PostsFields_parent_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Parent_Delete = {
  __typename?: 'PostsFields_parent_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Parent_Read = {
  __typename?: 'PostsFields_parent_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Parent_Update = {
  __typename?: 'PostsFields_parent_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedDate = {
  __typename?: 'PostsFields_publishedDate';
  create?: Maybe<PostsFields_PublishedDate_Create>;
  delete?: Maybe<PostsFields_PublishedDate_Delete>;
  read?: Maybe<PostsFields_PublishedDate_Read>;
  update?: Maybe<PostsFields_PublishedDate_Update>;
};

export type PostsFields_PublishedDate_Create = {
  __typename?: 'PostsFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedDate_Delete = {
  __typename?: 'PostsFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedDate_Read = {
  __typename?: 'PostsFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_PublishedDate_Update = {
  __typename?: 'PostsFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Site = {
  __typename?: 'PostsFields_site';
  create?: Maybe<PostsFields_Site_Create>;
  delete?: Maybe<PostsFields_Site_Delete>;
  read?: Maybe<PostsFields_Site_Read>;
  update?: Maybe<PostsFields_Site_Update>;
};

export type PostsFields_Site_Create = {
  __typename?: 'PostsFields_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Site_Delete = {
  __typename?: 'PostsFields_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Site_Read = {
  __typename?: 'PostsFields_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Site_Update = {
  __typename?: 'PostsFields_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug = {
  __typename?: 'PostsFields_slug';
  create?: Maybe<PostsFields_Slug_Create>;
  delete?: Maybe<PostsFields_Slug_Delete>;
  read?: Maybe<PostsFields_Slug_Read>;
  update?: Maybe<PostsFields_Slug_Update>;
};

export type PostsFields_Slug_Create = {
  __typename?: 'PostsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Delete = {
  __typename?: 'PostsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Read = {
  __typename?: 'PostsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Slug_Update = {
  __typename?: 'PostsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title = {
  __typename?: 'PostsFields_title';
  create?: Maybe<PostsFields_Title_Create>;
  delete?: Maybe<PostsFields_Title_Delete>;
  read?: Maybe<PostsFields_Title_Read>;
  update?: Maybe<PostsFields_Title_Update>;
};

export type PostsFields_Title_Create = {
  __typename?: 'PostsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Delete = {
  __typename?: 'PostsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Read = {
  __typename?: 'PostsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_Title_Update = {
  __typename?: 'PostsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt = {
  __typename?: 'PostsFields_updatedAt';
  create?: Maybe<PostsFields_UpdatedAt_Create>;
  delete?: Maybe<PostsFields_UpdatedAt_Delete>;
  read?: Maybe<PostsFields_UpdatedAt_Read>;
  update?: Maybe<PostsFields_UpdatedAt_Update>;
};

export type PostsFields_UpdatedAt_Create = {
  __typename?: 'PostsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Delete = {
  __typename?: 'PostsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Read = {
  __typename?: 'PostsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PostsFields_UpdatedAt_Update = {
  __typename?: 'PostsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PostsReadAccess = {
  __typename?: 'PostsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadDocAccess = {
  __typename?: 'PostsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsAccess = {
  __typename?: 'PostsReadVersionsAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsReadVersionsDocAccess = {
  __typename?: 'PostsReadVersionsDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateAccess = {
  __typename?: 'PostsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PostsUpdateDocAccess = {
  __typename?: 'PostsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Preference = {
  __typename?: 'Preference';
  createdAt: Scalars['DateTime']['output'];
  key: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  value?: Maybe<Scalars['JSON']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Categories?: Maybe<Categories>;
  Category?: Maybe<Category>;
  Form?: Maybe<Form>;
  FormSubmission?: Maybe<FormSubmission>;
  FormSubmissions?: Maybe<FormSubmissions>;
  Forms?: Maybe<Forms>;
  LandingPage?: Maybe<LandingPage>;
  LandingPages?: Maybe<LandingPages>;
  Media?: Maybe<Media>;
  Page?: Maybe<Page>;
  Pages?: Maybe<Pages>;
  Post?: Maybe<Post>;
  Posts?: Maybe<Posts>;
  Preference?: Maybe<Preference>;
  Redirect?: Maybe<Redirect>;
  Redirects?: Maybe<Redirects>;
  Site?: Maybe<Site>;
  Sites?: Maybe<Sites>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  docAccessCategory?: Maybe<CategoriesDocAccess>;
  docAccessForm?: Maybe<FormsDocAccess>;
  docAccessFormSubmission?: Maybe<Form_SubmissionsDocAccess>;
  docAccessLandingPage?: Maybe<LandingPageDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPage?: Maybe<PagesDocAccess>;
  docAccessPost?: Maybe<PostsDocAccess>;
  docAccessRedirect?: Maybe<RedirectsDocAccess>;
  docAccessSite?: Maybe<SitesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
  versionPage?: Maybe<PageVersion>;
  versionPost?: Maybe<PostVersion>;
  versionsPages?: Maybe<VersionsPages>;
  versionsPosts?: Maybe<VersionsPosts>;
};

export type QueryCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Category_Where>;
};

export type QueryCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryFormArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryFormSubmissionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<FormSubmission_Where>;
};

export type QueryFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Form_Where>;
};

export type QueryLandingPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryLandingPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<LandingPage_Where>;
};

export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Page_Where>;
};

export type QueryPostArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryPostsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Post_Where>;
};

export type QueryPreferenceArgs = {
  key?: InputMaybe<Scalars['String']['input']>;
};

export type QueryRedirectArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryRedirectsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Redirect_Where>;
};

export type QuerySiteArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QuerySitesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Site_Where>;
};

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};

export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};

export type QueryDocAccessCategoryArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessFormArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessFormSubmissionArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessLandingPageArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessPageArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessPostArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessRedirectArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessSiteArgs = {
  id: Scalars['String']['input'];
};

export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type QueryVersionPageArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryVersionPostArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type QueryVersionsPagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsPage_Where>;
};

export type QueryVersionsPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<VersionsPost_Where>;
};

export type Redirect = {
  __typename?: 'Redirect';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  from: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Redirect_To>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RedirectUpdate_To_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<RedirectUpdate_To_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum RedirectUpdate_To_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export type Redirect_To = {
  __typename?: 'Redirect_To';
  reference?: Maybe<Redirect_To_Reference_Relationship>;
  type?: Maybe<Redirect_To_Type>;
  url?: Maybe<Scalars['String']['output']>;
};

export type Redirect_To_Reference = Page | Post;

export type Redirect_To_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Redirect_To_ReferenceRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum Redirect_To_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export enum Redirect_To_Reference_RelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export type Redirect_To_Reference_Relationship = {
  __typename?: 'Redirect_To_Reference_Relationship';
  relationTo?: Maybe<Redirect_To_Reference_RelationTo>;
  value?: Maybe<Redirect_To_Reference>;
};

export enum Redirect_To_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export type Redirect_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Redirect_From_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_To__Reference_Relation = {
  relationTo?: InputMaybe<Redirect_To__Reference_Relation_RelationTo>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum Redirect_To__Reference_Relation_RelationTo {
  Pages = 'pages',
  Posts = 'posts',
}

export enum Redirect_To__Type_Input {
  Custom = 'custom',
  Reference = 'reference',
}

export type Redirect_To__Type_Operator = {
  contains?: InputMaybe<Redirect_To__Type_Input>;
  equals?: InputMaybe<Redirect_To__Type_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Redirect_To__Type_Input>;
  not_equals?: InputMaybe<Redirect_To__Type_Input>;
};

export type Redirect_To__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Redirect_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Redirect_Where = {
  AND?: InputMaybe<Array<InputMaybe<Redirect_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Redirect_Where_Or>>>;
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirect_Where_And = {
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirect_Where_Or = {
  createdAt?: InputMaybe<Redirect_CreatedAt_Operator>;
  from?: InputMaybe<Redirect_From_Operator>;
  id?: InputMaybe<Redirect_Id_Operator>;
  to__reference?: InputMaybe<Redirect_To__Reference_Relation>;
  to__type?: InputMaybe<Redirect_To__Type_Operator>;
  to__url?: InputMaybe<Redirect_To__Url_Operator>;
  updatedAt?: InputMaybe<Redirect_UpdatedAt_Operator>;
};

export type Redirects = {
  __typename?: 'Redirects';
  docs?: Maybe<Array<Maybe<Redirect>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type RedirectsCreateAccess = {
  __typename?: 'RedirectsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsCreateDocAccess = {
  __typename?: 'RedirectsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDeleteAccess = {
  __typename?: 'RedirectsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDeleteDocAccess = {
  __typename?: 'RedirectsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsDocAccessFields = {
  __typename?: 'RedirectsDocAccessFields';
  createdAt?: Maybe<RedirectsDocAccessFields_CreatedAt>;
  from?: Maybe<RedirectsDocAccessFields_From>;
  to?: Maybe<RedirectsDocAccessFields_To>;
  updatedAt?: Maybe<RedirectsDocAccessFields_UpdatedAt>;
};

export type RedirectsDocAccessFields_CreatedAt = {
  __typename?: 'RedirectsDocAccessFields_createdAt';
  create?: Maybe<RedirectsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<RedirectsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<RedirectsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<RedirectsDocAccessFields_CreatedAt_Update>;
};

export type RedirectsDocAccessFields_CreatedAt_Create = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Read = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_CreatedAt_Update = {
  __typename?: 'RedirectsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From = {
  __typename?: 'RedirectsDocAccessFields_from';
  create?: Maybe<RedirectsDocAccessFields_From_Create>;
  delete?: Maybe<RedirectsDocAccessFields_From_Delete>;
  read?: Maybe<RedirectsDocAccessFields_From_Read>;
  update?: Maybe<RedirectsDocAccessFields_From_Update>;
};

export type RedirectsDocAccessFields_From_Create = {
  __typename?: 'RedirectsDocAccessFields_from_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Delete = {
  __typename?: 'RedirectsDocAccessFields_from_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Read = {
  __typename?: 'RedirectsDocAccessFields_from_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_From_Update = {
  __typename?: 'RedirectsDocAccessFields_from_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To = {
  __typename?: 'RedirectsDocAccessFields_to';
  create?: Maybe<RedirectsDocAccessFields_To_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Delete>;
  fields?: Maybe<RedirectsDocAccessFields_To_Fields>;
  read?: Maybe<RedirectsDocAccessFields_To_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Update>;
};

export type RedirectsDocAccessFields_To_Create = {
  __typename?: 'RedirectsDocAccessFields_to_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Fields = {
  __typename?: 'RedirectsDocAccessFields_to_Fields';
  reference?: Maybe<RedirectsDocAccessFields_To_Reference>;
  type?: Maybe<RedirectsDocAccessFields_To_Type>;
  url?: Maybe<RedirectsDocAccessFields_To_Url>;
};

export type RedirectsDocAccessFields_To_Read = {
  __typename?: 'RedirectsDocAccessFields_to_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Update = {
  __typename?: 'RedirectsDocAccessFields_to_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference = {
  __typename?: 'RedirectsDocAccessFields_to_reference';
  create?: Maybe<RedirectsDocAccessFields_To_Reference_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Reference_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Reference_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Reference_Update>;
};

export type RedirectsDocAccessFields_To_Reference_Create = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Read = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Reference_Update = {
  __typename?: 'RedirectsDocAccessFields_to_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type = {
  __typename?: 'RedirectsDocAccessFields_to_type';
  create?: Maybe<RedirectsDocAccessFields_To_Type_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Type_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Type_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Type_Update>;
};

export type RedirectsDocAccessFields_To_Type_Create = {
  __typename?: 'RedirectsDocAccessFields_to_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Read = {
  __typename?: 'RedirectsDocAccessFields_to_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Type_Update = {
  __typename?: 'RedirectsDocAccessFields_to_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url = {
  __typename?: 'RedirectsDocAccessFields_to_url';
  create?: Maybe<RedirectsDocAccessFields_To_Url_Create>;
  delete?: Maybe<RedirectsDocAccessFields_To_Url_Delete>;
  read?: Maybe<RedirectsDocAccessFields_To_Url_Read>;
  update?: Maybe<RedirectsDocAccessFields_To_Url_Update>;
};

export type RedirectsDocAccessFields_To_Url_Create = {
  __typename?: 'RedirectsDocAccessFields_to_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Delete = {
  __typename?: 'RedirectsDocAccessFields_to_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Read = {
  __typename?: 'RedirectsDocAccessFields_to_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_To_Url_Update = {
  __typename?: 'RedirectsDocAccessFields_to_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt = {
  __typename?: 'RedirectsDocAccessFields_updatedAt';
  create?: Maybe<RedirectsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<RedirectsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<RedirectsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<RedirectsDocAccessFields_UpdatedAt_Update>;
};

export type RedirectsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'RedirectsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields = {
  __typename?: 'RedirectsFields';
  createdAt?: Maybe<RedirectsFields_CreatedAt>;
  from?: Maybe<RedirectsFields_From>;
  to?: Maybe<RedirectsFields_To>;
  updatedAt?: Maybe<RedirectsFields_UpdatedAt>;
};

export type RedirectsFields_CreatedAt = {
  __typename?: 'RedirectsFields_createdAt';
  create?: Maybe<RedirectsFields_CreatedAt_Create>;
  delete?: Maybe<RedirectsFields_CreatedAt_Delete>;
  read?: Maybe<RedirectsFields_CreatedAt_Read>;
  update?: Maybe<RedirectsFields_CreatedAt_Update>;
};

export type RedirectsFields_CreatedAt_Create = {
  __typename?: 'RedirectsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Delete = {
  __typename?: 'RedirectsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Read = {
  __typename?: 'RedirectsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_CreatedAt_Update = {
  __typename?: 'RedirectsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From = {
  __typename?: 'RedirectsFields_from';
  create?: Maybe<RedirectsFields_From_Create>;
  delete?: Maybe<RedirectsFields_From_Delete>;
  read?: Maybe<RedirectsFields_From_Read>;
  update?: Maybe<RedirectsFields_From_Update>;
};

export type RedirectsFields_From_Create = {
  __typename?: 'RedirectsFields_from_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Delete = {
  __typename?: 'RedirectsFields_from_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Read = {
  __typename?: 'RedirectsFields_from_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_From_Update = {
  __typename?: 'RedirectsFields_from_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To = {
  __typename?: 'RedirectsFields_to';
  create?: Maybe<RedirectsFields_To_Create>;
  delete?: Maybe<RedirectsFields_To_Delete>;
  fields?: Maybe<RedirectsFields_To_Fields>;
  read?: Maybe<RedirectsFields_To_Read>;
  update?: Maybe<RedirectsFields_To_Update>;
};

export type RedirectsFields_To_Create = {
  __typename?: 'RedirectsFields_to_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Delete = {
  __typename?: 'RedirectsFields_to_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Fields = {
  __typename?: 'RedirectsFields_to_Fields';
  reference?: Maybe<RedirectsFields_To_Reference>;
  type?: Maybe<RedirectsFields_To_Type>;
  url?: Maybe<RedirectsFields_To_Url>;
};

export type RedirectsFields_To_Read = {
  __typename?: 'RedirectsFields_to_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Update = {
  __typename?: 'RedirectsFields_to_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference = {
  __typename?: 'RedirectsFields_to_reference';
  create?: Maybe<RedirectsFields_To_Reference_Create>;
  delete?: Maybe<RedirectsFields_To_Reference_Delete>;
  read?: Maybe<RedirectsFields_To_Reference_Read>;
  update?: Maybe<RedirectsFields_To_Reference_Update>;
};

export type RedirectsFields_To_Reference_Create = {
  __typename?: 'RedirectsFields_to_reference_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Delete = {
  __typename?: 'RedirectsFields_to_reference_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Read = {
  __typename?: 'RedirectsFields_to_reference_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Reference_Update = {
  __typename?: 'RedirectsFields_to_reference_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type = {
  __typename?: 'RedirectsFields_to_type';
  create?: Maybe<RedirectsFields_To_Type_Create>;
  delete?: Maybe<RedirectsFields_To_Type_Delete>;
  read?: Maybe<RedirectsFields_To_Type_Read>;
  update?: Maybe<RedirectsFields_To_Type_Update>;
};

export type RedirectsFields_To_Type_Create = {
  __typename?: 'RedirectsFields_to_type_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Delete = {
  __typename?: 'RedirectsFields_to_type_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Read = {
  __typename?: 'RedirectsFields_to_type_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Type_Update = {
  __typename?: 'RedirectsFields_to_type_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url = {
  __typename?: 'RedirectsFields_to_url';
  create?: Maybe<RedirectsFields_To_Url_Create>;
  delete?: Maybe<RedirectsFields_To_Url_Delete>;
  read?: Maybe<RedirectsFields_To_Url_Read>;
  update?: Maybe<RedirectsFields_To_Url_Update>;
};

export type RedirectsFields_To_Url_Create = {
  __typename?: 'RedirectsFields_to_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Delete = {
  __typename?: 'RedirectsFields_to_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Read = {
  __typename?: 'RedirectsFields_to_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_To_Url_Update = {
  __typename?: 'RedirectsFields_to_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt = {
  __typename?: 'RedirectsFields_updatedAt';
  create?: Maybe<RedirectsFields_UpdatedAt_Create>;
  delete?: Maybe<RedirectsFields_UpdatedAt_Delete>;
  read?: Maybe<RedirectsFields_UpdatedAt_Read>;
  update?: Maybe<RedirectsFields_UpdatedAt_Update>;
};

export type RedirectsFields_UpdatedAt_Create = {
  __typename?: 'RedirectsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Delete = {
  __typename?: 'RedirectsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Read = {
  __typename?: 'RedirectsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsFields_UpdatedAt_Update = {
  __typename?: 'RedirectsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type RedirectsReadAccess = {
  __typename?: 'RedirectsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsReadDocAccess = {
  __typename?: 'RedirectsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsUpdateAccess = {
  __typename?: 'RedirectsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type RedirectsUpdateDocAccess = {
  __typename?: 'RedirectsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Select = {
  __typename?: 'Select';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  options?: Maybe<Array<Select_Options>>;
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Select_Options = {
  __typename?: 'Select_Options';
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type Site = {
  __typename?: 'Site';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  faqs?: Maybe<Array<Site_Faqs>>;
  id?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Media>;
  meta?: Maybe<Site_Meta>;
  social?: Maybe<Array<Site_Social>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type SiteLogoArgs = {
  where?: InputMaybe<Site_Logo_Where>;
};

export enum SiteUpdate_Social_Site_MutationInput {
  Discord = 'discord',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Pinterest = 'pinterest',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Youtube = 'youtube',
}

export type Site_Faqs = {
  __typename?: 'Site_Faqs';
  faq?: Maybe<Array<Site_Faqs_Faq>>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Site_Faqs_Faq = {
  __typename?: 'Site_Faqs_Faq';
  answer?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  question?: Maybe<Scalars['String']['output']>;
};

export type Site_Logo_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Logo_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Logo_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Logo_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Where = {
  AND?: InputMaybe<Array<InputMaybe<Site_Logo_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Site_Logo_Where_Or>>>;
  alt?: InputMaybe<Site_Logo_Alt_Operator>;
  createdAt?: InputMaybe<Site_Logo_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Logo_Filename_Operator>;
  filesize?: InputMaybe<Site_Logo_Filesize_Operator>;
  height?: InputMaybe<Site_Logo_Height_Operator>;
  id?: InputMaybe<Site_Logo_Id_Operator>;
  mimeType?: InputMaybe<Site_Logo_MimeType_Operator>;
  prefix?: InputMaybe<Site_Logo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Logo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Logo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Logo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Logo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Logo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Logo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Logo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Logo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Logo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Logo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Logo_Source_Operator>;
  updatedAt?: InputMaybe<Site_Logo_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Logo_Url_Operator>;
  width?: InputMaybe<Site_Logo_Width_Operator>;
};

export type Site_Logo_Where_And = {
  alt?: InputMaybe<Site_Logo_Alt_Operator>;
  createdAt?: InputMaybe<Site_Logo_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Logo_Filename_Operator>;
  filesize?: InputMaybe<Site_Logo_Filesize_Operator>;
  height?: InputMaybe<Site_Logo_Height_Operator>;
  id?: InputMaybe<Site_Logo_Id_Operator>;
  mimeType?: InputMaybe<Site_Logo_MimeType_Operator>;
  prefix?: InputMaybe<Site_Logo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Logo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Logo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Logo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Logo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Logo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Logo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Logo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Logo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Logo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Logo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Logo_Source_Operator>;
  updatedAt?: InputMaybe<Site_Logo_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Logo_Url_Operator>;
  width?: InputMaybe<Site_Logo_Width_Operator>;
};

export type Site_Logo_Where_Or = {
  alt?: InputMaybe<Site_Logo_Alt_Operator>;
  createdAt?: InputMaybe<Site_Logo_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Logo_Filename_Operator>;
  filesize?: InputMaybe<Site_Logo_Filesize_Operator>;
  height?: InputMaybe<Site_Logo_Height_Operator>;
  id?: InputMaybe<Site_Logo_Id_Operator>;
  mimeType?: InputMaybe<Site_Logo_MimeType_Operator>;
  prefix?: InputMaybe<Site_Logo_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Logo_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Logo_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Logo_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Logo_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Logo_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Logo_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Logo_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Logo_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Logo_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Logo_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Logo_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Logo_Source_Operator>;
  updatedAt?: InputMaybe<Site_Logo_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Logo_Url_Operator>;
  width?: InputMaybe<Site_Logo_Width_Operator>;
};

export type Site_Logo_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta = {
  __typename?: 'Site_Meta';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Media>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Site_MetaImageArgs = {
  where?: InputMaybe<Site_Meta_Image_Where>;
};

export type Site_Meta_Image_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Meta_Image_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Prefix_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Feature__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Feature__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Sizes__Feature__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Sizes__Feature__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Feature__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Feature__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Meta_Image_Source_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Meta_Image_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Meta_Image_Where = {
  AND?: InputMaybe<Array<InputMaybe<Site_Meta_Image_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Site_Meta_Image_Where_Or>>>;
  alt?: InputMaybe<Site_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Site_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Site_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Site_Meta_Image_Height_Operator>;
  id?: InputMaybe<Site_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Site_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Site_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Site_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Meta_Image_Url_Operator>;
  width?: InputMaybe<Site_Meta_Image_Width_Operator>;
};

export type Site_Meta_Image_Where_And = {
  alt?: InputMaybe<Site_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Site_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Site_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Site_Meta_Image_Height_Operator>;
  id?: InputMaybe<Site_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Site_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Site_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Site_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Meta_Image_Url_Operator>;
  width?: InputMaybe<Site_Meta_Image_Width_Operator>;
};

export type Site_Meta_Image_Where_Or = {
  alt?: InputMaybe<Site_Meta_Image_Alt_Operator>;
  createdAt?: InputMaybe<Site_Meta_Image_CreatedAt_Operator>;
  filename?: InputMaybe<Site_Meta_Image_Filename_Operator>;
  filesize?: InputMaybe<Site_Meta_Image_Filesize_Operator>;
  height?: InputMaybe<Site_Meta_Image_Height_Operator>;
  id?: InputMaybe<Site_Meta_Image_Id_Operator>;
  mimeType?: InputMaybe<Site_Meta_Image_MimeType_Operator>;
  prefix?: InputMaybe<Site_Meta_Image_Prefix_Operator>;
  sizes__feature__filename?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filename_Operator>;
  sizes__feature__filesize?: InputMaybe<Site_Meta_Image_Sizes__Feature__Filesize_Operator>;
  sizes__feature__height?: InputMaybe<Site_Meta_Image_Sizes__Feature__Height_Operator>;
  sizes__feature__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Feature__MimeType_Operator>;
  sizes__feature__url?: InputMaybe<Site_Meta_Image_Sizes__Feature__Url_Operator>;
  sizes__feature__width?: InputMaybe<Site_Meta_Image_Sizes__Feature__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Site_Meta_Image_Sizes__Thumbnail__Width_Operator>;
  source?: InputMaybe<Site_Meta_Image_Source_Operator>;
  updatedAt?: InputMaybe<Site_Meta_Image_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Meta_Image_Url_Operator>;
  width?: InputMaybe<Site_Meta_Image_Width_Operator>;
};

export type Site_Meta_Image_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Site_Social = {
  __typename?: 'Site_Social';
  id?: Maybe<Scalars['String']['output']>;
  profileLink?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Site_Social_Site>;
};

export enum Site_Social_Site {
  Discord = 'discord',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Pinterest = 'pinterest',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Youtube = 'youtube',
}

export enum Site_Social_Site_MutationInput {
  Discord = 'discord',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Pinterest = 'pinterest',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Youtube = 'youtube',
}

export type Site_Address_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Site_Faqs__Faq__Answer_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Site_Faqs__Faq__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Faqs__Faq__Question_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Faqs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Faqs__Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Logo_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Site_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Site_Meta__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Site_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Social__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Social__ProfileLink_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum Site_Social__Site_Input {
  Discord = 'discord',
  Facebook = 'facebook',
  Instagram = 'instagram',
  Pinterest = 'pinterest',
  Tiktok = 'tiktok',
  Twitter = 'twitter',
  Youtube = 'youtube',
}

export type Site_Social__Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Site_Social__Site_Input>>>;
  equals?: InputMaybe<Site_Social__Site_Input>;
  in?: InputMaybe<Array<InputMaybe<Site_Social__Site_Input>>>;
  not_equals?: InputMaybe<Site_Social__Site_Input>;
  not_in?: InputMaybe<Array<InputMaybe<Site_Social__Site_Input>>>;
};

export type Site_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Site_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Site_Where = {
  AND?: InputMaybe<Array<InputMaybe<Site_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Site_Where_Or>>>;
  address?: InputMaybe<Site_Address_Operator>;
  createdAt?: InputMaybe<Site_CreatedAt_Operator>;
  description?: InputMaybe<Site_Description_Operator>;
  faqs__faq__answer?: InputMaybe<Site_Faqs__Faq__Answer_Operator>;
  faqs__faq__id?: InputMaybe<Site_Faqs__Faq__Id_Operator>;
  faqs__faq__question?: InputMaybe<Site_Faqs__Faq__Question_Operator>;
  faqs__id?: InputMaybe<Site_Faqs__Id_Operator>;
  faqs__name?: InputMaybe<Site_Faqs__Name_Operator>;
  id?: InputMaybe<Site_Id_Operator>;
  logo?: InputMaybe<Site_Logo_Operator>;
  meta__description?: InputMaybe<Site_Meta__Description_Operator>;
  meta__image?: InputMaybe<Site_Meta__Image_Operator>;
  meta__title?: InputMaybe<Site_Meta__Title_Operator>;
  social__id?: InputMaybe<Site_Social__Id_Operator>;
  social__profileLink?: InputMaybe<Site_Social__ProfileLink_Operator>;
  social__site?: InputMaybe<Site_Social__Site_Operator>;
  title?: InputMaybe<Site_Title_Operator>;
  updatedAt?: InputMaybe<Site_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Url_Operator>;
};

export type Site_Where_And = {
  address?: InputMaybe<Site_Address_Operator>;
  createdAt?: InputMaybe<Site_CreatedAt_Operator>;
  description?: InputMaybe<Site_Description_Operator>;
  faqs__faq__answer?: InputMaybe<Site_Faqs__Faq__Answer_Operator>;
  faqs__faq__id?: InputMaybe<Site_Faqs__Faq__Id_Operator>;
  faqs__faq__question?: InputMaybe<Site_Faqs__Faq__Question_Operator>;
  faqs__id?: InputMaybe<Site_Faqs__Id_Operator>;
  faqs__name?: InputMaybe<Site_Faqs__Name_Operator>;
  id?: InputMaybe<Site_Id_Operator>;
  logo?: InputMaybe<Site_Logo_Operator>;
  meta__description?: InputMaybe<Site_Meta__Description_Operator>;
  meta__image?: InputMaybe<Site_Meta__Image_Operator>;
  meta__title?: InputMaybe<Site_Meta__Title_Operator>;
  social__id?: InputMaybe<Site_Social__Id_Operator>;
  social__profileLink?: InputMaybe<Site_Social__ProfileLink_Operator>;
  social__site?: InputMaybe<Site_Social__Site_Operator>;
  title?: InputMaybe<Site_Title_Operator>;
  updatedAt?: InputMaybe<Site_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Url_Operator>;
};

export type Site_Where_Or = {
  address?: InputMaybe<Site_Address_Operator>;
  createdAt?: InputMaybe<Site_CreatedAt_Operator>;
  description?: InputMaybe<Site_Description_Operator>;
  faqs__faq__answer?: InputMaybe<Site_Faqs__Faq__Answer_Operator>;
  faqs__faq__id?: InputMaybe<Site_Faqs__Faq__Id_Operator>;
  faqs__faq__question?: InputMaybe<Site_Faqs__Faq__Question_Operator>;
  faqs__id?: InputMaybe<Site_Faqs__Id_Operator>;
  faqs__name?: InputMaybe<Site_Faqs__Name_Operator>;
  id?: InputMaybe<Site_Id_Operator>;
  logo?: InputMaybe<Site_Logo_Operator>;
  meta__description?: InputMaybe<Site_Meta__Description_Operator>;
  meta__image?: InputMaybe<Site_Meta__Image_Operator>;
  meta__title?: InputMaybe<Site_Meta__Title_Operator>;
  social__id?: InputMaybe<Site_Social__Id_Operator>;
  social__profileLink?: InputMaybe<Site_Social__ProfileLink_Operator>;
  social__site?: InputMaybe<Site_Social__Site_Operator>;
  title?: InputMaybe<Site_Title_Operator>;
  updatedAt?: InputMaybe<Site_UpdatedAt_Operator>;
  url?: InputMaybe<Site_Url_Operator>;
};

export type Sites = {
  __typename?: 'Sites';
  docs?: Maybe<Array<Maybe<Site>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type SitesCreateAccess = {
  __typename?: 'SitesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesCreateDocAccess = {
  __typename?: 'SitesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesDeleteAccess = {
  __typename?: 'SitesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesDeleteDocAccess = {
  __typename?: 'SitesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesDocAccessFields = {
  __typename?: 'SitesDocAccessFields';
  address?: Maybe<SitesDocAccessFields_Address>;
  createdAt?: Maybe<SitesDocAccessFields_CreatedAt>;
  description?: Maybe<SitesDocAccessFields_Description>;
  faqs?: Maybe<SitesDocAccessFields_Faqs>;
  logo?: Maybe<SitesDocAccessFields_Logo>;
  meta?: Maybe<SitesDocAccessFields_Meta>;
  social?: Maybe<SitesDocAccessFields_Social>;
  title?: Maybe<SitesDocAccessFields_Title>;
  updatedAt?: Maybe<SitesDocAccessFields_UpdatedAt>;
  url?: Maybe<SitesDocAccessFields_Url>;
};

export type SitesDocAccessFields_Address = {
  __typename?: 'SitesDocAccessFields_address';
  create?: Maybe<SitesDocAccessFields_Address_Create>;
  delete?: Maybe<SitesDocAccessFields_Address_Delete>;
  read?: Maybe<SitesDocAccessFields_Address_Read>;
  update?: Maybe<SitesDocAccessFields_Address_Update>;
};

export type SitesDocAccessFields_Address_Create = {
  __typename?: 'SitesDocAccessFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Address_Delete = {
  __typename?: 'SitesDocAccessFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Address_Read = {
  __typename?: 'SitesDocAccessFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Address_Update = {
  __typename?: 'SitesDocAccessFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_CreatedAt = {
  __typename?: 'SitesDocAccessFields_createdAt';
  create?: Maybe<SitesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SitesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SitesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SitesDocAccessFields_CreatedAt_Update>;
};

export type SitesDocAccessFields_CreatedAt_Create = {
  __typename?: 'SitesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SitesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_CreatedAt_Read = {
  __typename?: 'SitesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_CreatedAt_Update = {
  __typename?: 'SitesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Description = {
  __typename?: 'SitesDocAccessFields_description';
  create?: Maybe<SitesDocAccessFields_Description_Create>;
  delete?: Maybe<SitesDocAccessFields_Description_Delete>;
  read?: Maybe<SitesDocAccessFields_Description_Read>;
  update?: Maybe<SitesDocAccessFields_Description_Update>;
};

export type SitesDocAccessFields_Description_Create = {
  __typename?: 'SitesDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Description_Delete = {
  __typename?: 'SitesDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Description_Read = {
  __typename?: 'SitesDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Description_Update = {
  __typename?: 'SitesDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs = {
  __typename?: 'SitesDocAccessFields_faqs';
  create?: Maybe<SitesDocAccessFields_Faqs_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Delete>;
  fields?: Maybe<SitesDocAccessFields_Faqs_Fields>;
  read?: Maybe<SitesDocAccessFields_Faqs_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Update>;
};

export type SitesDocAccessFields_Faqs_Create = {
  __typename?: 'SitesDocAccessFields_faqs_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Fields = {
  __typename?: 'SitesDocAccessFields_faqs_Fields';
  faq?: Maybe<SitesDocAccessFields_Faqs_Faq>;
  id?: Maybe<SitesDocAccessFields_Faqs_Id>;
  name?: Maybe<SitesDocAccessFields_Faqs_Name>;
};

export type SitesDocAccessFields_Faqs_Read = {
  __typename?: 'SitesDocAccessFields_faqs_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Update = {
  __typename?: 'SitesDocAccessFields_faqs_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq = {
  __typename?: 'SitesDocAccessFields_faqs_faq';
  create?: Maybe<SitesDocAccessFields_Faqs_Faq_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Faq_Delete>;
  fields?: Maybe<SitesDocAccessFields_Faqs_Faq_Fields>;
  read?: Maybe<SitesDocAccessFields_Faqs_Faq_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Faq_Update>;
};

export type SitesDocAccessFields_Faqs_Faq_Create = {
  __typename?: 'SitesDocAccessFields_faqs_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Fields = {
  __typename?: 'SitesDocAccessFields_faqs_faq_Fields';
  answer?: Maybe<SitesDocAccessFields_Faqs_Faq_Answer>;
  id?: Maybe<SitesDocAccessFields_Faqs_Faq_Id>;
  question?: Maybe<SitesDocAccessFields_Faqs_Faq_Question>;
};

export type SitesDocAccessFields_Faqs_Faq_Read = {
  __typename?: 'SitesDocAccessFields_faqs_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Update = {
  __typename?: 'SitesDocAccessFields_faqs_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Answer = {
  __typename?: 'SitesDocAccessFields_faqs_faq_answer';
  create?: Maybe<SitesDocAccessFields_Faqs_Faq_Answer_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Faq_Answer_Delete>;
  read?: Maybe<SitesDocAccessFields_Faqs_Faq_Answer_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Faq_Answer_Update>;
};

export type SitesDocAccessFields_Faqs_Faq_Answer_Create = {
  __typename?: 'SitesDocAccessFields_faqs_faq_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Answer_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_faq_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Answer_Read = {
  __typename?: 'SitesDocAccessFields_faqs_faq_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Answer_Update = {
  __typename?: 'SitesDocAccessFields_faqs_faq_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Id = {
  __typename?: 'SitesDocAccessFields_faqs_faq_id';
  create?: Maybe<SitesDocAccessFields_Faqs_Faq_Id_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Faq_Id_Delete>;
  read?: Maybe<SitesDocAccessFields_Faqs_Faq_Id_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Faq_Id_Update>;
};

export type SitesDocAccessFields_Faqs_Faq_Id_Create = {
  __typename?: 'SitesDocAccessFields_faqs_faq_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Id_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_faq_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Id_Read = {
  __typename?: 'SitesDocAccessFields_faqs_faq_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Id_Update = {
  __typename?: 'SitesDocAccessFields_faqs_faq_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Question = {
  __typename?: 'SitesDocAccessFields_faqs_faq_question';
  create?: Maybe<SitesDocAccessFields_Faqs_Faq_Question_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Faq_Question_Delete>;
  read?: Maybe<SitesDocAccessFields_Faqs_Faq_Question_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Faq_Question_Update>;
};

export type SitesDocAccessFields_Faqs_Faq_Question_Create = {
  __typename?: 'SitesDocAccessFields_faqs_faq_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Question_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_faq_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Question_Read = {
  __typename?: 'SitesDocAccessFields_faqs_faq_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Faq_Question_Update = {
  __typename?: 'SitesDocAccessFields_faqs_faq_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Id = {
  __typename?: 'SitesDocAccessFields_faqs_id';
  create?: Maybe<SitesDocAccessFields_Faqs_Id_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Id_Delete>;
  read?: Maybe<SitesDocAccessFields_Faqs_Id_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Id_Update>;
};

export type SitesDocAccessFields_Faqs_Id_Create = {
  __typename?: 'SitesDocAccessFields_faqs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Id_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Id_Read = {
  __typename?: 'SitesDocAccessFields_faqs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Id_Update = {
  __typename?: 'SitesDocAccessFields_faqs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Name = {
  __typename?: 'SitesDocAccessFields_faqs_name';
  create?: Maybe<SitesDocAccessFields_Faqs_Name_Create>;
  delete?: Maybe<SitesDocAccessFields_Faqs_Name_Delete>;
  read?: Maybe<SitesDocAccessFields_Faqs_Name_Read>;
  update?: Maybe<SitesDocAccessFields_Faqs_Name_Update>;
};

export type SitesDocAccessFields_Faqs_Name_Create = {
  __typename?: 'SitesDocAccessFields_faqs_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Name_Delete = {
  __typename?: 'SitesDocAccessFields_faqs_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Name_Read = {
  __typename?: 'SitesDocAccessFields_faqs_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Faqs_Name_Update = {
  __typename?: 'SitesDocAccessFields_faqs_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Logo = {
  __typename?: 'SitesDocAccessFields_logo';
  create?: Maybe<SitesDocAccessFields_Logo_Create>;
  delete?: Maybe<SitesDocAccessFields_Logo_Delete>;
  read?: Maybe<SitesDocAccessFields_Logo_Read>;
  update?: Maybe<SitesDocAccessFields_Logo_Update>;
};

export type SitesDocAccessFields_Logo_Create = {
  __typename?: 'SitesDocAccessFields_logo_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Logo_Delete = {
  __typename?: 'SitesDocAccessFields_logo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Logo_Read = {
  __typename?: 'SitesDocAccessFields_logo_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Logo_Update = {
  __typename?: 'SitesDocAccessFields_logo_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta = {
  __typename?: 'SitesDocAccessFields_meta';
  create?: Maybe<SitesDocAccessFields_Meta_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Delete>;
  fields?: Maybe<SitesDocAccessFields_Meta_Fields>;
  read?: Maybe<SitesDocAccessFields_Meta_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Update>;
};

export type SitesDocAccessFields_Meta_Create = {
  __typename?: 'SitesDocAccessFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Delete = {
  __typename?: 'SitesDocAccessFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Fields = {
  __typename?: 'SitesDocAccessFields_meta_Fields';
  description?: Maybe<SitesDocAccessFields_Meta_Description>;
  image?: Maybe<SitesDocAccessFields_Meta_Image>;
  overview?: Maybe<SitesDocAccessFields_Meta_Overview>;
  preview?: Maybe<SitesDocAccessFields_Meta_Preview>;
  title?: Maybe<SitesDocAccessFields_Meta_Title>;
};

export type SitesDocAccessFields_Meta_Read = {
  __typename?: 'SitesDocAccessFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Update = {
  __typename?: 'SitesDocAccessFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Description = {
  __typename?: 'SitesDocAccessFields_meta_description';
  create?: Maybe<SitesDocAccessFields_Meta_Description_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Description_Delete>;
  read?: Maybe<SitesDocAccessFields_Meta_Description_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Description_Update>;
};

export type SitesDocAccessFields_Meta_Description_Create = {
  __typename?: 'SitesDocAccessFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'SitesDocAccessFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Description_Read = {
  __typename?: 'SitesDocAccessFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Description_Update = {
  __typename?: 'SitesDocAccessFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Image = {
  __typename?: 'SitesDocAccessFields_meta_image';
  create?: Maybe<SitesDocAccessFields_Meta_Image_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Image_Delete>;
  read?: Maybe<SitesDocAccessFields_Meta_Image_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Image_Update>;
};

export type SitesDocAccessFields_Meta_Image_Create = {
  __typename?: 'SitesDocAccessFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'SitesDocAccessFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Image_Read = {
  __typename?: 'SitesDocAccessFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Image_Update = {
  __typename?: 'SitesDocAccessFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Overview = {
  __typename?: 'SitesDocAccessFields_meta_overview';
  create?: Maybe<SitesDocAccessFields_Meta_Overview_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Overview_Delete>;
  read?: Maybe<SitesDocAccessFields_Meta_Overview_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Overview_Update>;
};

export type SitesDocAccessFields_Meta_Overview_Create = {
  __typename?: 'SitesDocAccessFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Overview_Delete = {
  __typename?: 'SitesDocAccessFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Overview_Read = {
  __typename?: 'SitesDocAccessFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Overview_Update = {
  __typename?: 'SitesDocAccessFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Preview = {
  __typename?: 'SitesDocAccessFields_meta_preview';
  create?: Maybe<SitesDocAccessFields_Meta_Preview_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Preview_Delete>;
  read?: Maybe<SitesDocAccessFields_Meta_Preview_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Preview_Update>;
};

export type SitesDocAccessFields_Meta_Preview_Create = {
  __typename?: 'SitesDocAccessFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Preview_Delete = {
  __typename?: 'SitesDocAccessFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Preview_Read = {
  __typename?: 'SitesDocAccessFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Preview_Update = {
  __typename?: 'SitesDocAccessFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Title = {
  __typename?: 'SitesDocAccessFields_meta_title';
  create?: Maybe<SitesDocAccessFields_Meta_Title_Create>;
  delete?: Maybe<SitesDocAccessFields_Meta_Title_Delete>;
  read?: Maybe<SitesDocAccessFields_Meta_Title_Read>;
  update?: Maybe<SitesDocAccessFields_Meta_Title_Update>;
};

export type SitesDocAccessFields_Meta_Title_Create = {
  __typename?: 'SitesDocAccessFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'SitesDocAccessFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Title_Read = {
  __typename?: 'SitesDocAccessFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Meta_Title_Update = {
  __typename?: 'SitesDocAccessFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social = {
  __typename?: 'SitesDocAccessFields_social';
  create?: Maybe<SitesDocAccessFields_Social_Create>;
  delete?: Maybe<SitesDocAccessFields_Social_Delete>;
  fields?: Maybe<SitesDocAccessFields_Social_Fields>;
  read?: Maybe<SitesDocAccessFields_Social_Read>;
  update?: Maybe<SitesDocAccessFields_Social_Update>;
};

export type SitesDocAccessFields_Social_Create = {
  __typename?: 'SitesDocAccessFields_social_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Delete = {
  __typename?: 'SitesDocAccessFields_social_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Fields = {
  __typename?: 'SitesDocAccessFields_social_Fields';
  id?: Maybe<SitesDocAccessFields_Social_Id>;
  profileLink?: Maybe<SitesDocAccessFields_Social_ProfileLink>;
  site?: Maybe<SitesDocAccessFields_Social_Site>;
};

export type SitesDocAccessFields_Social_Read = {
  __typename?: 'SitesDocAccessFields_social_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Update = {
  __typename?: 'SitesDocAccessFields_social_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Id = {
  __typename?: 'SitesDocAccessFields_social_id';
  create?: Maybe<SitesDocAccessFields_Social_Id_Create>;
  delete?: Maybe<SitesDocAccessFields_Social_Id_Delete>;
  read?: Maybe<SitesDocAccessFields_Social_Id_Read>;
  update?: Maybe<SitesDocAccessFields_Social_Id_Update>;
};

export type SitesDocAccessFields_Social_Id_Create = {
  __typename?: 'SitesDocAccessFields_social_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Id_Delete = {
  __typename?: 'SitesDocAccessFields_social_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Id_Read = {
  __typename?: 'SitesDocAccessFields_social_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Id_Update = {
  __typename?: 'SitesDocAccessFields_social_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_ProfileLink = {
  __typename?: 'SitesDocAccessFields_social_profileLink';
  create?: Maybe<SitesDocAccessFields_Social_ProfileLink_Create>;
  delete?: Maybe<SitesDocAccessFields_Social_ProfileLink_Delete>;
  read?: Maybe<SitesDocAccessFields_Social_ProfileLink_Read>;
  update?: Maybe<SitesDocAccessFields_Social_ProfileLink_Update>;
};

export type SitesDocAccessFields_Social_ProfileLink_Create = {
  __typename?: 'SitesDocAccessFields_social_profileLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_ProfileLink_Delete = {
  __typename?: 'SitesDocAccessFields_social_profileLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_ProfileLink_Read = {
  __typename?: 'SitesDocAccessFields_social_profileLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_ProfileLink_Update = {
  __typename?: 'SitesDocAccessFields_social_profileLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Site = {
  __typename?: 'SitesDocAccessFields_social_site';
  create?: Maybe<SitesDocAccessFields_Social_Site_Create>;
  delete?: Maybe<SitesDocAccessFields_Social_Site_Delete>;
  read?: Maybe<SitesDocAccessFields_Social_Site_Read>;
  update?: Maybe<SitesDocAccessFields_Social_Site_Update>;
};

export type SitesDocAccessFields_Social_Site_Create = {
  __typename?: 'SitesDocAccessFields_social_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Site_Delete = {
  __typename?: 'SitesDocAccessFields_social_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Site_Read = {
  __typename?: 'SitesDocAccessFields_social_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Social_Site_Update = {
  __typename?: 'SitesDocAccessFields_social_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Title = {
  __typename?: 'SitesDocAccessFields_title';
  create?: Maybe<SitesDocAccessFields_Title_Create>;
  delete?: Maybe<SitesDocAccessFields_Title_Delete>;
  read?: Maybe<SitesDocAccessFields_Title_Read>;
  update?: Maybe<SitesDocAccessFields_Title_Update>;
};

export type SitesDocAccessFields_Title_Create = {
  __typename?: 'SitesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Title_Delete = {
  __typename?: 'SitesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Title_Read = {
  __typename?: 'SitesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Title_Update = {
  __typename?: 'SitesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_UpdatedAt = {
  __typename?: 'SitesDocAccessFields_updatedAt';
  create?: Maybe<SitesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SitesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SitesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SitesDocAccessFields_UpdatedAt_Update>;
};

export type SitesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SitesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SitesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SitesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SitesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Url = {
  __typename?: 'SitesDocAccessFields_url';
  create?: Maybe<SitesDocAccessFields_Url_Create>;
  delete?: Maybe<SitesDocAccessFields_Url_Delete>;
  read?: Maybe<SitesDocAccessFields_Url_Read>;
  update?: Maybe<SitesDocAccessFields_Url_Update>;
};

export type SitesDocAccessFields_Url_Create = {
  __typename?: 'SitesDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Url_Delete = {
  __typename?: 'SitesDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Url_Read = {
  __typename?: 'SitesDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesDocAccessFields_Url_Update = {
  __typename?: 'SitesDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields = {
  __typename?: 'SitesFields';
  address?: Maybe<SitesFields_Address>;
  createdAt?: Maybe<SitesFields_CreatedAt>;
  description?: Maybe<SitesFields_Description>;
  faqs?: Maybe<SitesFields_Faqs>;
  logo?: Maybe<SitesFields_Logo>;
  meta?: Maybe<SitesFields_Meta>;
  social?: Maybe<SitesFields_Social>;
  title?: Maybe<SitesFields_Title>;
  updatedAt?: Maybe<SitesFields_UpdatedAt>;
  url?: Maybe<SitesFields_Url>;
};

export type SitesFields_Address = {
  __typename?: 'SitesFields_address';
  create?: Maybe<SitesFields_Address_Create>;
  delete?: Maybe<SitesFields_Address_Delete>;
  read?: Maybe<SitesFields_Address_Read>;
  update?: Maybe<SitesFields_Address_Update>;
};

export type SitesFields_Address_Create = {
  __typename?: 'SitesFields_address_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Address_Delete = {
  __typename?: 'SitesFields_address_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Address_Read = {
  __typename?: 'SitesFields_address_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Address_Update = {
  __typename?: 'SitesFields_address_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_CreatedAt = {
  __typename?: 'SitesFields_createdAt';
  create?: Maybe<SitesFields_CreatedAt_Create>;
  delete?: Maybe<SitesFields_CreatedAt_Delete>;
  read?: Maybe<SitesFields_CreatedAt_Read>;
  update?: Maybe<SitesFields_CreatedAt_Update>;
};

export type SitesFields_CreatedAt_Create = {
  __typename?: 'SitesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_CreatedAt_Delete = {
  __typename?: 'SitesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_CreatedAt_Read = {
  __typename?: 'SitesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_CreatedAt_Update = {
  __typename?: 'SitesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Description = {
  __typename?: 'SitesFields_description';
  create?: Maybe<SitesFields_Description_Create>;
  delete?: Maybe<SitesFields_Description_Delete>;
  read?: Maybe<SitesFields_Description_Read>;
  update?: Maybe<SitesFields_Description_Update>;
};

export type SitesFields_Description_Create = {
  __typename?: 'SitesFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Description_Delete = {
  __typename?: 'SitesFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Description_Read = {
  __typename?: 'SitesFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Description_Update = {
  __typename?: 'SitesFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs = {
  __typename?: 'SitesFields_faqs';
  create?: Maybe<SitesFields_Faqs_Create>;
  delete?: Maybe<SitesFields_Faqs_Delete>;
  fields?: Maybe<SitesFields_Faqs_Fields>;
  read?: Maybe<SitesFields_Faqs_Read>;
  update?: Maybe<SitesFields_Faqs_Update>;
};

export type SitesFields_Faqs_Create = {
  __typename?: 'SitesFields_faqs_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Delete = {
  __typename?: 'SitesFields_faqs_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Fields = {
  __typename?: 'SitesFields_faqs_Fields';
  faq?: Maybe<SitesFields_Faqs_Faq>;
  id?: Maybe<SitesFields_Faqs_Id>;
  name?: Maybe<SitesFields_Faqs_Name>;
};

export type SitesFields_Faqs_Read = {
  __typename?: 'SitesFields_faqs_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Update = {
  __typename?: 'SitesFields_faqs_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq = {
  __typename?: 'SitesFields_faqs_faq';
  create?: Maybe<SitesFields_Faqs_Faq_Create>;
  delete?: Maybe<SitesFields_Faqs_Faq_Delete>;
  fields?: Maybe<SitesFields_Faqs_Faq_Fields>;
  read?: Maybe<SitesFields_Faqs_Faq_Read>;
  update?: Maybe<SitesFields_Faqs_Faq_Update>;
};

export type SitesFields_Faqs_Faq_Create = {
  __typename?: 'SitesFields_faqs_faq_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Delete = {
  __typename?: 'SitesFields_faqs_faq_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Fields = {
  __typename?: 'SitesFields_faqs_faq_Fields';
  answer?: Maybe<SitesFields_Faqs_Faq_Answer>;
  id?: Maybe<SitesFields_Faqs_Faq_Id>;
  question?: Maybe<SitesFields_Faqs_Faq_Question>;
};

export type SitesFields_Faqs_Faq_Read = {
  __typename?: 'SitesFields_faqs_faq_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Update = {
  __typename?: 'SitesFields_faqs_faq_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Answer = {
  __typename?: 'SitesFields_faqs_faq_answer';
  create?: Maybe<SitesFields_Faqs_Faq_Answer_Create>;
  delete?: Maybe<SitesFields_Faqs_Faq_Answer_Delete>;
  read?: Maybe<SitesFields_Faqs_Faq_Answer_Read>;
  update?: Maybe<SitesFields_Faqs_Faq_Answer_Update>;
};

export type SitesFields_Faqs_Faq_Answer_Create = {
  __typename?: 'SitesFields_faqs_faq_answer_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Answer_Delete = {
  __typename?: 'SitesFields_faqs_faq_answer_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Answer_Read = {
  __typename?: 'SitesFields_faqs_faq_answer_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Answer_Update = {
  __typename?: 'SitesFields_faqs_faq_answer_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Id = {
  __typename?: 'SitesFields_faqs_faq_id';
  create?: Maybe<SitesFields_Faqs_Faq_Id_Create>;
  delete?: Maybe<SitesFields_Faqs_Faq_Id_Delete>;
  read?: Maybe<SitesFields_Faqs_Faq_Id_Read>;
  update?: Maybe<SitesFields_Faqs_Faq_Id_Update>;
};

export type SitesFields_Faqs_Faq_Id_Create = {
  __typename?: 'SitesFields_faqs_faq_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Id_Delete = {
  __typename?: 'SitesFields_faqs_faq_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Id_Read = {
  __typename?: 'SitesFields_faqs_faq_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Id_Update = {
  __typename?: 'SitesFields_faqs_faq_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Question = {
  __typename?: 'SitesFields_faqs_faq_question';
  create?: Maybe<SitesFields_Faqs_Faq_Question_Create>;
  delete?: Maybe<SitesFields_Faqs_Faq_Question_Delete>;
  read?: Maybe<SitesFields_Faqs_Faq_Question_Read>;
  update?: Maybe<SitesFields_Faqs_Faq_Question_Update>;
};

export type SitesFields_Faqs_Faq_Question_Create = {
  __typename?: 'SitesFields_faqs_faq_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Question_Delete = {
  __typename?: 'SitesFields_faqs_faq_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Question_Read = {
  __typename?: 'SitesFields_faqs_faq_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Faq_Question_Update = {
  __typename?: 'SitesFields_faqs_faq_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Id = {
  __typename?: 'SitesFields_faqs_id';
  create?: Maybe<SitesFields_Faqs_Id_Create>;
  delete?: Maybe<SitesFields_Faqs_Id_Delete>;
  read?: Maybe<SitesFields_Faqs_Id_Read>;
  update?: Maybe<SitesFields_Faqs_Id_Update>;
};

export type SitesFields_Faqs_Id_Create = {
  __typename?: 'SitesFields_faqs_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Id_Delete = {
  __typename?: 'SitesFields_faqs_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Id_Read = {
  __typename?: 'SitesFields_faqs_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Id_Update = {
  __typename?: 'SitesFields_faqs_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Name = {
  __typename?: 'SitesFields_faqs_name';
  create?: Maybe<SitesFields_Faqs_Name_Create>;
  delete?: Maybe<SitesFields_Faqs_Name_Delete>;
  read?: Maybe<SitesFields_Faqs_Name_Read>;
  update?: Maybe<SitesFields_Faqs_Name_Update>;
};

export type SitesFields_Faqs_Name_Create = {
  __typename?: 'SitesFields_faqs_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Name_Delete = {
  __typename?: 'SitesFields_faqs_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Name_Read = {
  __typename?: 'SitesFields_faqs_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Faqs_Name_Update = {
  __typename?: 'SitesFields_faqs_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Logo = {
  __typename?: 'SitesFields_logo';
  create?: Maybe<SitesFields_Logo_Create>;
  delete?: Maybe<SitesFields_Logo_Delete>;
  read?: Maybe<SitesFields_Logo_Read>;
  update?: Maybe<SitesFields_Logo_Update>;
};

export type SitesFields_Logo_Create = {
  __typename?: 'SitesFields_logo_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Logo_Delete = {
  __typename?: 'SitesFields_logo_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Logo_Read = {
  __typename?: 'SitesFields_logo_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Logo_Update = {
  __typename?: 'SitesFields_logo_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta = {
  __typename?: 'SitesFields_meta';
  create?: Maybe<SitesFields_Meta_Create>;
  delete?: Maybe<SitesFields_Meta_Delete>;
  fields?: Maybe<SitesFields_Meta_Fields>;
  read?: Maybe<SitesFields_Meta_Read>;
  update?: Maybe<SitesFields_Meta_Update>;
};

export type SitesFields_Meta_Create = {
  __typename?: 'SitesFields_meta_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Delete = {
  __typename?: 'SitesFields_meta_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Fields = {
  __typename?: 'SitesFields_meta_Fields';
  description?: Maybe<SitesFields_Meta_Description>;
  image?: Maybe<SitesFields_Meta_Image>;
  overview?: Maybe<SitesFields_Meta_Overview>;
  preview?: Maybe<SitesFields_Meta_Preview>;
  title?: Maybe<SitesFields_Meta_Title>;
};

export type SitesFields_Meta_Read = {
  __typename?: 'SitesFields_meta_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Update = {
  __typename?: 'SitesFields_meta_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Description = {
  __typename?: 'SitesFields_meta_description';
  create?: Maybe<SitesFields_Meta_Description_Create>;
  delete?: Maybe<SitesFields_Meta_Description_Delete>;
  read?: Maybe<SitesFields_Meta_Description_Read>;
  update?: Maybe<SitesFields_Meta_Description_Update>;
};

export type SitesFields_Meta_Description_Create = {
  __typename?: 'SitesFields_meta_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Description_Delete = {
  __typename?: 'SitesFields_meta_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Description_Read = {
  __typename?: 'SitesFields_meta_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Description_Update = {
  __typename?: 'SitesFields_meta_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Image = {
  __typename?: 'SitesFields_meta_image';
  create?: Maybe<SitesFields_Meta_Image_Create>;
  delete?: Maybe<SitesFields_Meta_Image_Delete>;
  read?: Maybe<SitesFields_Meta_Image_Read>;
  update?: Maybe<SitesFields_Meta_Image_Update>;
};

export type SitesFields_Meta_Image_Create = {
  __typename?: 'SitesFields_meta_image_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Image_Delete = {
  __typename?: 'SitesFields_meta_image_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Image_Read = {
  __typename?: 'SitesFields_meta_image_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Image_Update = {
  __typename?: 'SitesFields_meta_image_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Overview = {
  __typename?: 'SitesFields_meta_overview';
  create?: Maybe<SitesFields_Meta_Overview_Create>;
  delete?: Maybe<SitesFields_Meta_Overview_Delete>;
  read?: Maybe<SitesFields_Meta_Overview_Read>;
  update?: Maybe<SitesFields_Meta_Overview_Update>;
};

export type SitesFields_Meta_Overview_Create = {
  __typename?: 'SitesFields_meta_overview_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Overview_Delete = {
  __typename?: 'SitesFields_meta_overview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Overview_Read = {
  __typename?: 'SitesFields_meta_overview_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Overview_Update = {
  __typename?: 'SitesFields_meta_overview_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Preview = {
  __typename?: 'SitesFields_meta_preview';
  create?: Maybe<SitesFields_Meta_Preview_Create>;
  delete?: Maybe<SitesFields_Meta_Preview_Delete>;
  read?: Maybe<SitesFields_Meta_Preview_Read>;
  update?: Maybe<SitesFields_Meta_Preview_Update>;
};

export type SitesFields_Meta_Preview_Create = {
  __typename?: 'SitesFields_meta_preview_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Preview_Delete = {
  __typename?: 'SitesFields_meta_preview_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Preview_Read = {
  __typename?: 'SitesFields_meta_preview_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Preview_Update = {
  __typename?: 'SitesFields_meta_preview_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Title = {
  __typename?: 'SitesFields_meta_title';
  create?: Maybe<SitesFields_Meta_Title_Create>;
  delete?: Maybe<SitesFields_Meta_Title_Delete>;
  read?: Maybe<SitesFields_Meta_Title_Read>;
  update?: Maybe<SitesFields_Meta_Title_Update>;
};

export type SitesFields_Meta_Title_Create = {
  __typename?: 'SitesFields_meta_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Title_Delete = {
  __typename?: 'SitesFields_meta_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Title_Read = {
  __typename?: 'SitesFields_meta_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Meta_Title_Update = {
  __typename?: 'SitesFields_meta_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social = {
  __typename?: 'SitesFields_social';
  create?: Maybe<SitesFields_Social_Create>;
  delete?: Maybe<SitesFields_Social_Delete>;
  fields?: Maybe<SitesFields_Social_Fields>;
  read?: Maybe<SitesFields_Social_Read>;
  update?: Maybe<SitesFields_Social_Update>;
};

export type SitesFields_Social_Create = {
  __typename?: 'SitesFields_social_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Delete = {
  __typename?: 'SitesFields_social_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Fields = {
  __typename?: 'SitesFields_social_Fields';
  id?: Maybe<SitesFields_Social_Id>;
  profileLink?: Maybe<SitesFields_Social_ProfileLink>;
  site?: Maybe<SitesFields_Social_Site>;
};

export type SitesFields_Social_Read = {
  __typename?: 'SitesFields_social_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Update = {
  __typename?: 'SitesFields_social_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Id = {
  __typename?: 'SitesFields_social_id';
  create?: Maybe<SitesFields_Social_Id_Create>;
  delete?: Maybe<SitesFields_Social_Id_Delete>;
  read?: Maybe<SitesFields_Social_Id_Read>;
  update?: Maybe<SitesFields_Social_Id_Update>;
};

export type SitesFields_Social_Id_Create = {
  __typename?: 'SitesFields_social_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Id_Delete = {
  __typename?: 'SitesFields_social_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Id_Read = {
  __typename?: 'SitesFields_social_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Id_Update = {
  __typename?: 'SitesFields_social_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_ProfileLink = {
  __typename?: 'SitesFields_social_profileLink';
  create?: Maybe<SitesFields_Social_ProfileLink_Create>;
  delete?: Maybe<SitesFields_Social_ProfileLink_Delete>;
  read?: Maybe<SitesFields_Social_ProfileLink_Read>;
  update?: Maybe<SitesFields_Social_ProfileLink_Update>;
};

export type SitesFields_Social_ProfileLink_Create = {
  __typename?: 'SitesFields_social_profileLink_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_ProfileLink_Delete = {
  __typename?: 'SitesFields_social_profileLink_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_ProfileLink_Read = {
  __typename?: 'SitesFields_social_profileLink_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_ProfileLink_Update = {
  __typename?: 'SitesFields_social_profileLink_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Site = {
  __typename?: 'SitesFields_social_site';
  create?: Maybe<SitesFields_Social_Site_Create>;
  delete?: Maybe<SitesFields_Social_Site_Delete>;
  read?: Maybe<SitesFields_Social_Site_Read>;
  update?: Maybe<SitesFields_Social_Site_Update>;
};

export type SitesFields_Social_Site_Create = {
  __typename?: 'SitesFields_social_site_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Site_Delete = {
  __typename?: 'SitesFields_social_site_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Site_Read = {
  __typename?: 'SitesFields_social_site_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Social_Site_Update = {
  __typename?: 'SitesFields_social_site_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Title = {
  __typename?: 'SitesFields_title';
  create?: Maybe<SitesFields_Title_Create>;
  delete?: Maybe<SitesFields_Title_Delete>;
  read?: Maybe<SitesFields_Title_Read>;
  update?: Maybe<SitesFields_Title_Update>;
};

export type SitesFields_Title_Create = {
  __typename?: 'SitesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Title_Delete = {
  __typename?: 'SitesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Title_Read = {
  __typename?: 'SitesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Title_Update = {
  __typename?: 'SitesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_UpdatedAt = {
  __typename?: 'SitesFields_updatedAt';
  create?: Maybe<SitesFields_UpdatedAt_Create>;
  delete?: Maybe<SitesFields_UpdatedAt_Delete>;
  read?: Maybe<SitesFields_UpdatedAt_Read>;
  update?: Maybe<SitesFields_UpdatedAt_Update>;
};

export type SitesFields_UpdatedAt_Create = {
  __typename?: 'SitesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_UpdatedAt_Delete = {
  __typename?: 'SitesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_UpdatedAt_Read = {
  __typename?: 'SitesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_UpdatedAt_Update = {
  __typename?: 'SitesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Url = {
  __typename?: 'SitesFields_url';
  create?: Maybe<SitesFields_Url_Create>;
  delete?: Maybe<SitesFields_Url_Delete>;
  read?: Maybe<SitesFields_Url_Read>;
  update?: Maybe<SitesFields_Url_Update>;
};

export type SitesFields_Url_Create = {
  __typename?: 'SitesFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Url_Delete = {
  __typename?: 'SitesFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Url_Read = {
  __typename?: 'SitesFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type SitesFields_Url_Update = {
  __typename?: 'SitesFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type SitesReadAccess = {
  __typename?: 'SitesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesReadDocAccess = {
  __typename?: 'SitesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesUpdateAccess = {
  __typename?: 'SitesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SitesUpdateDocAccess = {
  __typename?: 'SitesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type State = {
  __typename?: 'State';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Text = {
  __typename?: 'Text';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Textarea = {
  __typename?: 'Textarea';
  blockName?: Maybe<Scalars['String']['output']>;
  blockType?: Maybe<Scalars['String']['output']>;
  defaultValue?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  required?: Maybe<Scalars['Boolean']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<User_Roles>>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserUpdate_Roles_MutationInput {
  Admin = 'admin',
  User = 'user',
}

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Roles {
  Admin = 'admin',
  User = 'user',
}

export enum User_Roles_Input {
  Admin = 'admin',
  User = 'user',
}

export enum User_Roles_MutationInput {
  Admin = 'admin',
  User = 'user',
}

export type User_Roles_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  equals?: InputMaybe<User_Roles_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
  not_equals?: InputMaybe<User_Roles_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Roles_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  roles?: InputMaybe<User_Roles_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  name?: Maybe<UsersDocAccessFields_Name>;
  password?: Maybe<UsersDocAccessFields_Password>;
  roles?: Maybe<UsersDocAccessFields_Roles>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles = {
  __typename?: 'UsersDocAccessFields_roles';
  create?: Maybe<UsersDocAccessFields_Roles_Create>;
  delete?: Maybe<UsersDocAccessFields_Roles_Delete>;
  read?: Maybe<UsersDocAccessFields_Roles_Read>;
  update?: Maybe<UsersDocAccessFields_Roles_Update>;
};

export type UsersDocAccessFields_Roles_Create = {
  __typename?: 'UsersDocAccessFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Delete = {
  __typename?: 'UsersDocAccessFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Read = {
  __typename?: 'UsersDocAccessFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Roles_Update = {
  __typename?: 'UsersDocAccessFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  name?: Maybe<UsersFields_Name>;
  password?: Maybe<UsersFields_Password>;
  roles?: Maybe<UsersFields_Roles>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles = {
  __typename?: 'UsersFields_roles';
  create?: Maybe<UsersFields_Roles_Create>;
  delete?: Maybe<UsersFields_Roles_Delete>;
  read?: Maybe<UsersFields_Roles_Read>;
  update?: Maybe<UsersFields_Roles_Update>;
};

export type UsersFields_Roles_Create = {
  __typename?: 'UsersFields_roles_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Delete = {
  __typename?: 'UsersFields_roles_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Read = {
  __typename?: 'UsersFields_roles_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Roles_Update = {
  __typename?: 'UsersFields_roles_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type CategoriesAccess = {
  __typename?: 'categoriesAccess';
  create?: Maybe<CategoriesCreateAccess>;
  delete?: Maybe<CategoriesDeleteAccess>;
  fields?: Maybe<CategoriesFields>;
  read?: Maybe<CategoriesReadAccess>;
  update?: Maybe<CategoriesUpdateAccess>;
};

export type CategoriesDocAccess = {
  __typename?: 'categoriesDocAccess';
  create?: Maybe<CategoriesCreateDocAccess>;
  delete?: Maybe<CategoriesDeleteDocAccess>;
  fields?: Maybe<CategoriesDocAccessFields>;
  read?: Maybe<CategoriesReadDocAccess>;
  update?: Maybe<CategoriesUpdateDocAccess>;
};

export type Form_SubmissionsAccess = {
  __typename?: 'form_submissionsAccess';
  create?: Maybe<FormSubmissionsCreateAccess>;
  delete?: Maybe<FormSubmissionsDeleteAccess>;
  fields?: Maybe<FormSubmissionsFields>;
  read?: Maybe<FormSubmissionsReadAccess>;
  update?: Maybe<FormSubmissionsUpdateAccess>;
};

export type Form_SubmissionsDocAccess = {
  __typename?: 'form_submissionsDocAccess';
  create?: Maybe<FormSubmissionsCreateDocAccess>;
  delete?: Maybe<FormSubmissionsDeleteDocAccess>;
  fields?: Maybe<FormSubmissionsDocAccessFields>;
  read?: Maybe<FormSubmissionsReadDocAccess>;
  update?: Maybe<FormSubmissionsUpdateDocAccess>;
};

export type FormsAccess = {
  __typename?: 'formsAccess';
  create?: Maybe<FormsCreateAccess>;
  delete?: Maybe<FormsDeleteAccess>;
  fields?: Maybe<FormsFields>;
  read?: Maybe<FormsReadAccess>;
  update?: Maybe<FormsUpdateAccess>;
};

export type FormsDocAccess = {
  __typename?: 'formsDocAccess';
  create?: Maybe<FormsCreateDocAccess>;
  delete?: Maybe<FormsDeleteDocAccess>;
  fields?: Maybe<FormsDocAccessFields>;
  read?: Maybe<FormsReadDocAccess>;
  update?: Maybe<FormsUpdateDocAccess>;
};

export type LandingPageAccess = {
  __typename?: 'landingPageAccess';
  create?: Maybe<LandingPageCreateAccess>;
  delete?: Maybe<LandingPageDeleteAccess>;
  fields?: Maybe<LandingPageFields>;
  read?: Maybe<LandingPageReadAccess>;
  update?: Maybe<LandingPageUpdateAccess>;
};

export type LandingPageDocAccess = {
  __typename?: 'landingPageDocAccess';
  create?: Maybe<LandingPageCreateDocAccess>;
  delete?: Maybe<LandingPageDeleteDocAccess>;
  fields?: Maybe<LandingPageDocAccessFields>;
  read?: Maybe<LandingPageReadDocAccess>;
  update?: Maybe<LandingPageUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationCategoryInput = {
  breadcrumbs?: InputMaybe<
    Array<InputMaybe<MutationCategory_BreadcrumbsInput>>
  >;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdateInput = {
  breadcrumbs?: InputMaybe<
    Array<InputMaybe<MutationCategoryUpdate_BreadcrumbsInput>>
  >;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategoryUpdate_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCategory_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>;
  confirmationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<MutationForm_EmailsInput>>>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  redirect: MutationForm_RedirectInput;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  submissionData?: InputMaybe<
    Array<InputMaybe<MutationFormSubmission_SubmissionDataInput>>
  >;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  form?: InputMaybe<Scalars['String']['input']>;
  submissionData?: InputMaybe<
    Array<InputMaybe<MutationFormSubmissionUpdate_SubmissionDataInput>>
  >;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormSubmissionUpdate_SubmissionDataInput = {
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type MutationFormSubmission_SubmissionDataInput = {
  field: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  value: Scalars['String']['input'];
};

export type MutationFormUpdateInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>;
  confirmationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  emails?: InputMaybe<Array<InputMaybe<MutationFormUpdate_EmailsInput>>>;
  fields?: InputMaybe<Scalars['JSON']['input']>;
  redirect: MutationFormUpdate_RedirectInput;
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormUpdate_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  cc?: InputMaybe<Scalars['String']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailTo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['JSON']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MutationFormUpdate_RedirectInput = {
  url: Scalars['String']['input'];
};

export type MutationForm_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>;
  cc?: InputMaybe<Scalars['String']['input']>;
  emailFrom?: InputMaybe<Scalars['String']['input']>;
  emailTo?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['JSON']['input']>;
  replyTo?: InputMaybe<Scalars['String']['input']>;
  subject?: InputMaybe<Scalars['String']['input']>;
};

export type MutationForm_RedirectInput = {
  url: Scalars['String']['input'];
};

export type MutationLandingPageInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationLandingPageUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  source?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  prefix?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  source?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  feature?: InputMaybe<MutationMediaUpdate_Sizes_FeatureInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  feature?: InputMaybe<MutationMedia_Sizes_FeatureInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_FeatureInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>;
  breadcrumbs?: InputMaybe<Array<InputMaybe<MutationPage_BreadcrumbsInput>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPage_MetaInput>;
  parent?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>;
  breadcrumbs?: InputMaybe<
    Array<InputMaybe<MutationPageUpdate_BreadcrumbsInput>>
  >;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPageUpdate_MetaInput>;
  parent?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPageUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPage_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostInput = {
  _status?: InputMaybe<Post__Status_MutationInput>;
  breadcrumbs?: InputMaybe<Array<InputMaybe<MutationPost_BreadcrumbsInput>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  hero: MutationPost_HeroInput;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPost_MetaInput>;
  parent?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdateInput = {
  _status?: InputMaybe<PostUpdate__Status_MutationInput>;
  breadcrumbs?: InputMaybe<
    Array<InputMaybe<MutationPostUpdate_BreadcrumbsInput>>
  >;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  hero: MutationPostUpdate_HeroInput;
  layout?: InputMaybe<Scalars['JSON']['input']>;
  meta?: InputMaybe<MutationPostUpdate_MetaInput>;
  parent?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  site?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdate_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdate_HeroInput = {
  links?: InputMaybe<Array<InputMaybe<MutationPostUpdate_Hero_LinksInput>>>;
  media?: InputMaybe<Scalars['String']['input']>;
  richText: Scalars['JSON']['input'];
  type: PostUpdate_Hero_Type_MutationInput;
};

export type MutationPostUpdate_Hero_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationPostUpdate_Hero_Links_LinkInput>;
};

export type MutationPostUpdate_Hero_Links_LinkInput = {
  appearance?: InputMaybe<PostUpdate_Hero_Links_Link_Appearance_MutationInput>;
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<PostUpdate_Hero_Links_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPostUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPost_BreadcrumbsInput = {
  doc?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPost_HeroInput = {
  links?: InputMaybe<Array<InputMaybe<MutationPost_Hero_LinksInput>>>;
  media?: InputMaybe<Scalars['String']['input']>;
  richText: Scalars['JSON']['input'];
  type: Post_Hero_Type_MutationInput;
};

export type MutationPost_Hero_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  link?: InputMaybe<MutationPost_Hero_Links_LinkInput>;
};

export type MutationPost_Hero_Links_LinkInput = {
  appearance?: InputMaybe<Post_Hero_Links_Link_Appearance_MutationInput>;
  label: Scalars['String']['input'];
  newTab?: InputMaybe<Scalars['Boolean']['input']>;
  reference?: InputMaybe<Post_Hero_Links_Link_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPost_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirectInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  from: Scalars['String']['input'];
  to: MutationRedirect_ToInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirectUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  from?: InputMaybe<Scalars['String']['input']>;
  to: MutationRedirectUpdate_ToInput;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirectUpdate_ToInput = {
  reference?: InputMaybe<RedirectUpdate_To_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationRedirect_ToInput = {
  reference?: InputMaybe<Redirect_To_ReferenceRelationshipInput>;
  type?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSiteInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Array<InputMaybe<MutationSite_FaqsInput>>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<MutationSite_MetaInput>;
  social?: InputMaybe<Array<InputMaybe<MutationSite_SocialInput>>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSiteUpdateInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  faqs?: InputMaybe<Array<InputMaybe<MutationSiteUpdate_FaqsInput>>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  meta?: InputMaybe<MutationSiteUpdate_MetaInput>;
  social?: InputMaybe<Array<InputMaybe<MutationSiteUpdate_SocialInput>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSiteUpdate_FaqsInput = {
  faq?: InputMaybe<Array<InputMaybe<MutationSiteUpdate_Faqs_FaqInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSiteUpdate_Faqs_FaqInput = {
  answer: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
};

export type MutationSiteUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSiteUpdate_SocialInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  profileLink: Scalars['String']['input'];
  site: SiteUpdate_Social_Site_MutationInput;
};

export type MutationSite_FaqsInput = {
  faq?: InputMaybe<Array<InputMaybe<MutationSite_Faqs_FaqInput>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSite_Faqs_FaqInput = {
  answer: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  question: Scalars['String']['input'];
};

export type MutationSite_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSite_SocialInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  profileLink: Scalars['String']['input'];
  site: Site_Social_Site_MutationInput;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<User_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<Array<InputMaybe<UserUpdate_Roles_MutationInput>>>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type PagesAccess = {
  __typename?: 'pagesAccess';
  create?: Maybe<PagesCreateAccess>;
  delete?: Maybe<PagesDeleteAccess>;
  fields?: Maybe<PagesFields>;
  read?: Maybe<PagesReadAccess>;
  readVersions?: Maybe<PagesReadVersionsAccess>;
  update?: Maybe<PagesUpdateAccess>;
};

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess';
  create?: Maybe<PagesCreateDocAccess>;
  delete?: Maybe<PagesDeleteDocAccess>;
  fields?: Maybe<PagesDocAccessFields>;
  read?: Maybe<PagesReadDocAccess>;
  readVersions?: Maybe<PagesReadVersionsDocAccess>;
  update?: Maybe<PagesUpdateDocAccess>;
};

export type PostsAccess = {
  __typename?: 'postsAccess';
  create?: Maybe<PostsCreateAccess>;
  delete?: Maybe<PostsDeleteAccess>;
  fields?: Maybe<PostsFields>;
  read?: Maybe<PostsReadAccess>;
  readVersions?: Maybe<PostsReadVersionsAccess>;
  update?: Maybe<PostsUpdateAccess>;
};

export type PostsDocAccess = {
  __typename?: 'postsDocAccess';
  create?: Maybe<PostsCreateDocAccess>;
  delete?: Maybe<PostsDeleteDocAccess>;
  fields?: Maybe<PostsDocAccessFields>;
  read?: Maybe<PostsReadDocAccess>;
  readVersions?: Maybe<PostsReadVersionsDocAccess>;
  update?: Maybe<PostsUpdateDocAccess>;
};

export type RedirectsAccess = {
  __typename?: 'redirectsAccess';
  create?: Maybe<RedirectsCreateAccess>;
  delete?: Maybe<RedirectsDeleteAccess>;
  fields?: Maybe<RedirectsFields>;
  read?: Maybe<RedirectsReadAccess>;
  update?: Maybe<RedirectsUpdateAccess>;
};

export type RedirectsDocAccess = {
  __typename?: 'redirectsDocAccess';
  create?: Maybe<RedirectsCreateDocAccess>;
  delete?: Maybe<RedirectsDeleteDocAccess>;
  fields?: Maybe<RedirectsDocAccessFields>;
  read?: Maybe<RedirectsReadDocAccess>;
  update?: Maybe<RedirectsUpdateDocAccess>;
};

export type SitesAccess = {
  __typename?: 'sitesAccess';
  create?: Maybe<SitesCreateAccess>;
  delete?: Maybe<SitesDeleteAccess>;
  fields?: Maybe<SitesFields>;
  read?: Maybe<SitesReadAccess>;
  update?: Maybe<SitesUpdateAccess>;
};

export type SitesDocAccess = {
  __typename?: 'sitesDocAccess';
  create?: Maybe<SitesCreateDocAccess>;
  delete?: Maybe<SitesDeleteDocAccess>;
  fields?: Maybe<SitesDocAccessFields>;
  read?: Maybe<SitesReadDocAccess>;
  update?: Maybe<SitesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
  roles?: Maybe<Array<UsersJwt_Roles>>;
};

export enum UsersJwt_Roles {
  Admin = 'admin',
  User = 'user',
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>;
};

export type VersionsPage_Version__Breadcrumbs__Doc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Breadcrumbs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Breadcrumbs__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Breadcrumbs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPage_Version__Meta__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPage_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Version__Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPage_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPage_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPage_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPage_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPage_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPage_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_And = {
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPage_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPage_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPage_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPage_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPage_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPage_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPage_Where_Or = {
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPage_Id_Operator>;
  parent?: InputMaybe<VersionsPage_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPage_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPage_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPage_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPage_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>;
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPage_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPage_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPage_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>;
};

export type VersionsPages = {
  __typename?: 'versionsPages';
  docs?: Maybe<Array<Maybe<PageVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type VersionsPost_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum VersionsPost_Version___Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export type VersionsPost_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPost_Version___Status_Input>>>;
  equals?: InputMaybe<VersionsPost_Version___Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<VersionsPost_Version___Status_Input>>>;
  not_equals?: InputMaybe<VersionsPost_Version___Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<VersionsPost_Version___Status_Input>>>;
};

export type VersionsPost_Version__Breadcrumbs__Doc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Breadcrumbs__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Breadcrumbs__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Breadcrumbs__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Version__Hero__Links__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum VersionsPost_Version__Hero__Links__Link__Appearance_Input {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
}

export type VersionsPost_Version__Hero__Links__Link__Appearance_Operator = {
  all?: InputMaybe<
    Array<InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Input>>
  >;
  equals?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<
    Array<InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Input>>
  >;
  not_equals?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Input>;
  not_in?: InputMaybe<
    Array<InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Input>>
  >;
};

export type VersionsPost_Version__Hero__Links__Link__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Hero__Links__Link__NewTab_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VersionsPost_Version__Hero__Links__Link__Reference_Relation = {
  relationTo?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Reference_Relation_RelationTo>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum VersionsPost_Version__Hero__Links__Link__Reference_Relation_RelationTo {
  Pages = 'pages',
}

export enum VersionsPost_Version__Hero__Links__Link__Type_Input {
  Custom = 'custom',
  Reference = 'reference',
}

export type VersionsPost_Version__Hero__Links__Link__Type_Operator = {
  contains?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Input>;
  equals?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Input>;
  not_equals?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Input>;
};

export type VersionsPost_Version__Hero__Links__Link__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Hero__Media_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPost_Version__Hero__RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export enum VersionsPost_Version__Hero__Type_Input {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type VersionsPost_Version__Hero__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPost_Version__Hero__Type_Input>>>;
  equals?: InputMaybe<VersionsPost_Version__Hero__Type_Input>;
  in?: InputMaybe<Array<InputMaybe<VersionsPost_Version__Hero__Type_Input>>>;
  not_equals?: InputMaybe<VersionsPost_Version__Hero__Type_Input>;
  not_in?: InputMaybe<
    Array<InputMaybe<VersionsPost_Version__Hero__Type_Input>>
  >;
};

export type VersionsPost_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPost_Version__Meta__Image_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type VersionsPost_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Version__Site_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VersionsPost_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type VersionsPost_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPost_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<VersionsPost_Where_Or>>>;
  createdAt?: InputMaybe<VersionsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPost_Id_Operator>;
  parent?: InputMaybe<VersionsPost_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPost_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPost_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPost_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPost_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPost_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  version__hero__links__id?: InputMaybe<VersionsPost_Version__Hero__Links__Id_Operator>;
  version__hero__links__link__appearance?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Operator>;
  version__hero__links__link__label?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Label_Operator>;
  version__hero__links__link__newTab?: InputMaybe<VersionsPost_Version__Hero__Links__Link__NewTab_Operator>;
  version__hero__links__link__reference?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Reference_Relation>;
  version__hero__links__link__type?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Operator>;
  version__hero__links__link__url?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Url_Operator>;
  version__hero__media?: InputMaybe<VersionsPost_Version__Hero__Media_Operator>;
  version__hero__richText?: InputMaybe<VersionsPost_Version__Hero__RichText_Operator>;
  version__hero__type?: InputMaybe<VersionsPost_Version__Hero__Type_Operator>;
  version__meta__description?: InputMaybe<VersionsPost_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPost_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPost_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPost_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPost_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPost_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPost_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPost_Where_And = {
  createdAt?: InputMaybe<VersionsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPost_Id_Operator>;
  parent?: InputMaybe<VersionsPost_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPost_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPost_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPost_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPost_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPost_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  version__hero__links__id?: InputMaybe<VersionsPost_Version__Hero__Links__Id_Operator>;
  version__hero__links__link__appearance?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Operator>;
  version__hero__links__link__label?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Label_Operator>;
  version__hero__links__link__newTab?: InputMaybe<VersionsPost_Version__Hero__Links__Link__NewTab_Operator>;
  version__hero__links__link__reference?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Reference_Relation>;
  version__hero__links__link__type?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Operator>;
  version__hero__links__link__url?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Url_Operator>;
  version__hero__media?: InputMaybe<VersionsPost_Version__Hero__Media_Operator>;
  version__hero__richText?: InputMaybe<VersionsPost_Version__Hero__RichText_Operator>;
  version__hero__type?: InputMaybe<VersionsPost_Version__Hero__Type_Operator>;
  version__meta__description?: InputMaybe<VersionsPost_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPost_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPost_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPost_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPost_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPost_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPost_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPost_Where_Or = {
  createdAt?: InputMaybe<VersionsPost_CreatedAt_Operator>;
  id?: InputMaybe<VersionsPost_Id_Operator>;
  parent?: InputMaybe<VersionsPost_Parent_Operator>;
  updatedAt?: InputMaybe<VersionsPost_UpdatedAt_Operator>;
  version___status?: InputMaybe<VersionsPost_Version___Status_Operator>;
  version__breadcrumbs__doc?: InputMaybe<VersionsPost_Version__Breadcrumbs__Doc_Operator>;
  version__breadcrumbs__id?: InputMaybe<VersionsPost_Version__Breadcrumbs__Id_Operator>;
  version__breadcrumbs__label?: InputMaybe<VersionsPost_Version__Breadcrumbs__Label_Operator>;
  version__breadcrumbs__url?: InputMaybe<VersionsPost_Version__Breadcrumbs__Url_Operator>;
  version__createdAt?: InputMaybe<VersionsPost_Version__CreatedAt_Operator>;
  version__hero__links__id?: InputMaybe<VersionsPost_Version__Hero__Links__Id_Operator>;
  version__hero__links__link__appearance?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Appearance_Operator>;
  version__hero__links__link__label?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Label_Operator>;
  version__hero__links__link__newTab?: InputMaybe<VersionsPost_Version__Hero__Links__Link__NewTab_Operator>;
  version__hero__links__link__reference?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Reference_Relation>;
  version__hero__links__link__type?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Type_Operator>;
  version__hero__links__link__url?: InputMaybe<VersionsPost_Version__Hero__Links__Link__Url_Operator>;
  version__hero__media?: InputMaybe<VersionsPost_Version__Hero__Media_Operator>;
  version__hero__richText?: InputMaybe<VersionsPost_Version__Hero__RichText_Operator>;
  version__hero__type?: InputMaybe<VersionsPost_Version__Hero__Type_Operator>;
  version__meta__description?: InputMaybe<VersionsPost_Version__Meta__Description_Operator>;
  version__meta__image?: InputMaybe<VersionsPost_Version__Meta__Image_Operator>;
  version__meta__title?: InputMaybe<VersionsPost_Version__Meta__Title_Operator>;
  version__parent?: InputMaybe<VersionsPost_Version__Parent_Operator>;
  version__publishedDate?: InputMaybe<VersionsPost_Version__PublishedDate_Operator>;
  version__site?: InputMaybe<VersionsPost_Version__Site_Operator>;
  version__slug?: InputMaybe<VersionsPost_Version__Slug_Operator>;
  version__title?: InputMaybe<VersionsPost_Version__Title_Operator>;
  version__updatedAt?: InputMaybe<VersionsPost_Version__UpdatedAt_Operator>;
};

export type VersionsPosts = {
  __typename?: 'versionsPosts';
  docs?: Maybe<Array<Maybe<PostVersion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AFormBlockFragment = {
  __typename?: 'AFormBlock';
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
  sectionHeader?: string | null;
  sectionSubheader?: string | null;
  sectionDescription: any;
  formSubheader?: string | null;
  formHeader?: string | null;
  noteContent?: string | null;
  noteTitle?: string | null;
  form: {
    __typename?: 'Form';
    id?: string | null;
    title: string;
    submitButtonLabel?: string | null;
    confirmationType?: Form_ConfirmationType | null;
    confirmationMessage?: any | null;
    updatedAt?: any | null;
    createdAt?: any | null;
    fields?: Array<
      | {
          __typename: 'Checkbox';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          defaultValue?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Country';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Email';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Message';
          message?: any | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Number';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Select';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
          options?: Array<{
            __typename?: 'Select_Options';
            label?: string | null;
            value?: string | null;
            id?: string | null;
          }> | null;
        }
      | {
          __typename: 'State';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Text';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
      | {
          __typename: 'Textarea';
          name: string;
          label?: string | null;
          width?: number | null;
          required?: boolean | null;
          id?: string | null;
          blockName?: string | null;
          blockType?: string | null;
        }
    > | null;
    redirect?: { __typename?: 'Form_Redirect'; url?: string | null } | null;
    emails?: Array<{
      __typename?: 'Form_Emails';
      emailTo?: string | null;
      cc?: string | null;
      bcc?: string | null;
      replyTo?: string | null;
      emailFrom?: string | null;
      subject?: string | null;
      message?: any | null;
      id?: string | null;
    }> | null;
  };
  sectionImage?: {
    __typename?: 'Media';
    url?: string | null;
    filename?: string | null;
  } | null;
};

export type FormFragment = {
  __typename?: 'Form';
  id?: string | null;
  title: string;
  submitButtonLabel?: string | null;
  confirmationType?: Form_ConfirmationType | null;
  confirmationMessage?: any | null;
  updatedAt?: any | null;
  createdAt?: any | null;
  fields?: Array<
    | {
        __typename: 'Checkbox';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        defaultValue?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Country';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Email';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Message';
        message?: any | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Number';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Select';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
        options?: Array<{
          __typename?: 'Select_Options';
          label?: string | null;
          value?: string | null;
          id?: string | null;
        }> | null;
      }
    | {
        __typename: 'State';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Text';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
    | {
        __typename: 'Textarea';
        name: string;
        label?: string | null;
        width?: number | null;
        required?: boolean | null;
        id?: string | null;
        blockName?: string | null;
        blockType?: string | null;
      }
  > | null;
  redirect?: { __typename?: 'Form_Redirect'; url?: string | null } | null;
  emails?: Array<{
    __typename?: 'Form_Emails';
    emailTo?: string | null;
    cc?: string | null;
    bcc?: string | null;
    replyTo?: string | null;
    emailFrom?: string | null;
    subject?: string | null;
    message?: any | null;
    id?: string | null;
  }> | null;
};

export type ASectionWithImageBlockFragment = {
  __typename?: 'ASectionWithImageBlock';
  title?: string | null;
  description?: string | null;
  backgroundColor?: string | null;
  enableLink?: boolean | null;
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
  direction?: ASectionWithImageBlock_Direction | null;
  media: {
    __typename?: 'Media';
    url?: string | null;
    id?: string | null;
    filename?: string | null;
  };
  link?: {
    __typename?: 'ASectionWithImageBlock_Link';
    url?: string | null;
    label?: string | null;
  } | null;
};

export type AFooterBlockFragment = {
  __typename?: 'AFooterBlock';
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
  navItems?: Array<{
    __typename?: 'AFooterBlock_NavItems';
    link?: {
      __typename?: 'AFooterBlock_NavItems_Link';
      label?: string | null;
      url?: string | null;
    } | null;
  }> | null;
};

export type AHeaderBlockFragment = {
  __typename?: 'AHeaderBlock';
  title?: string | null;
  phoneNumber?: string | null;
  phoneNumberLabel?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
  companylogo: { __typename?: 'Media'; url?: string | null; alt: string };
};

export type AListSectionBlockFragment = {
  __typename?: 'AListSectionBlock';
  blockType?: string | null;
  sectionFooter?: string | null;
  listItems?: string | null;
  id?: string | null;
  blockName?: string | null;
  backgroundColor?: string | null;
  enableLink?: boolean | null;
  link?: {
    __typename?: 'AListSectionBlock_Link';
    label?: string | null;
    url?: string | null;
  } | null;
};

export type ACallToActionBlockFragment = {
  __typename?: 'ACallToActionBlock';
  title?: string | null;
  phoneNumber?: string | null;
  clickToCallLabel?: string | null;
  description?: string | null;
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
  backgroundColor?: string | null;
};

export type AConsultationSectionBlockFragment = {
  __typename?: 'AConsultationSectionBlock';
  blockName?: string | null;
  phoneNumber?: string | null;
  id?: string | null;
  formLink?: string | null;
  blockType?: string | null;
  title?: string | null;
  formLinkLabel?: string | null;
  backgroundImage: { __typename?: 'Media'; alt: string; url?: string | null };
};

export type APrivacyPolicyBlockFragment = {
  __typename?: 'APrivacyPolicy';
  privacyPolicy?: any | null;
  id?: string | null;
  blockName?: string | null;
  blockType?: string | null;
};

export type FormsQueryVariables = Exact<{ [key: string]: never }>;

export type FormsQuery = {
  __typename?: 'Query';
  Forms?: {
    __typename?: 'Forms';
    docs?: Array<{
      __typename?: 'Form';
      title: string;
      fields?: Array<
        | { __typename: 'Checkbox' }
        | { __typename: 'Country' }
        | { __typename: 'Email' }
        | { __typename: 'Message' }
        | { __typename: 'Number' }
        | { __typename: 'Select' }
        | { __typename: 'State' }
        | { __typename: 'Text' }
        | { __typename: 'Textarea' }
      > | null;
    } | null> | null;
  } | null;
};

export type GetLandingPageLayoutQueryVariables = Exact<{
  siteId: Scalars['String']['input'];
}>;

export type GetLandingPageLayoutQuery = {
  __typename?: 'Query';
  LandingPages?: {
    __typename?: 'LandingPages';
    docs?: Array<{
      __typename?: 'LandingPage';
      layout?: Array<
        | {
            __typename: 'ACallToActionBlock';
            title?: string | null;
            phoneNumber?: string | null;
            clickToCallLabel?: string | null;
            description?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            backgroundColor?: string | null;
          }
        | {
            __typename: 'AConsultationSectionBlock';
            blockName?: string | null;
            phoneNumber?: string | null;
            id?: string | null;
            formLink?: string | null;
            blockType?: string | null;
            title?: string | null;
            formLinkLabel?: string | null;
            backgroundImage: {
              __typename?: 'Media';
              alt: string;
              url?: string | null;
            };
          }
        | {
            __typename: 'AFooterBlock';
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            navItems?: Array<{
              __typename?: 'AFooterBlock_NavItems';
              link?: {
                __typename?: 'AFooterBlock_NavItems_Link';
                label?: string | null;
                url?: string | null;
              } | null;
            }> | null;
          }
        | {
            __typename: 'AFormBlock';
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            sectionHeader?: string | null;
            sectionSubheader?: string | null;
            sectionDescription: any;
            formSubheader?: string | null;
            formHeader?: string | null;
            noteContent?: string | null;
            noteTitle?: string | null;
            form: {
              __typename?: 'Form';
              id?: string | null;
              title: string;
              submitButtonLabel?: string | null;
              confirmationType?: Form_ConfirmationType | null;
              confirmationMessage?: any | null;
              updatedAt?: any | null;
              createdAt?: any | null;
              fields?: Array<
                | {
                    __typename: 'Checkbox';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    defaultValue?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Country';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Email';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Message';
                    message?: any | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Number';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Select';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                    options?: Array<{
                      __typename?: 'Select_Options';
                      label?: string | null;
                      value?: string | null;
                      id?: string | null;
                    }> | null;
                  }
                | {
                    __typename: 'State';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Text';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Textarea';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
              > | null;
              redirect?: {
                __typename?: 'Form_Redirect';
                url?: string | null;
              } | null;
              emails?: Array<{
                __typename?: 'Form_Emails';
                emailTo?: string | null;
                cc?: string | null;
                bcc?: string | null;
                replyTo?: string | null;
                emailFrom?: string | null;
                subject?: string | null;
                message?: any | null;
                id?: string | null;
              }> | null;
            };
            sectionImage?: {
              __typename?: 'Media';
              url?: string | null;
              filename?: string | null;
            } | null;
          }
        | {
            __typename: 'AHeaderBlock';
            title?: string | null;
            phoneNumber?: string | null;
            phoneNumberLabel?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            companylogo: {
              __typename?: 'Media';
              url?: string | null;
              alt: string;
            };
          }
        | {
            __typename: 'AListSectionBlock';
            blockType?: string | null;
            sectionFooter?: string | null;
            listItems?: string | null;
            id?: string | null;
            blockName?: string | null;
            backgroundColor?: string | null;
            enableLink?: boolean | null;
            link?: {
              __typename?: 'AListSectionBlock_Link';
              label?: string | null;
              url?: string | null;
            } | null;
          }
        | {
            __typename: 'ASectionWithImageBlock';
            title?: string | null;
            description?: string | null;
            backgroundColor?: string | null;
            enableLink?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            direction?: ASectionWithImageBlock_Direction | null;
            media: {
              __typename?: 'Media';
              url?: string | null;
              id?: string | null;
              filename?: string | null;
            };
            link?: {
              __typename?: 'ASectionWithImageBlock_Link';
              url?: string | null;
              label?: string | null;
            } | null;
          }
        | { __typename: 'Archive' }
        | { __typename: 'MediaBlock' }
      > | null;
    } | null> | null;
  } | null;
};

export type GetPageLayoutQueryVariables = Exact<{
  siteId: Scalars['String']['input'];
  slug: Scalars['String']['input'];
}>;

export type GetPageLayoutQuery = {
  __typename?: 'Query';
  Pages?: {
    __typename?: 'Pages';
    docs?: Array<{
      __typename?: 'Page';
      layout?: Array<
        | { __typename: 'ACallToActionBlock' }
        | { __typename: 'AFormBlock' }
        | {
            __typename: 'APrivacyPolicy';
            privacyPolicy?: any | null;
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
          }
        | {
            __typename: 'AShortformBlock';
            attention?: string | null;
            attentionMessage?: string | null;
            sectionHeader?: string | null;
            sectionSubheader?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            callUsMessage?: string | null;
            callUsNumber?: string | null;
            form?: {
              __typename?: 'Form';
              id?: string | null;
              title: string;
              submitButtonLabel?: string | null;
              confirmationType?: Form_ConfirmationType | null;
              confirmationMessage?: any | null;
              updatedAt?: any | null;
              createdAt?: any | null;
              fields?: Array<
                | {
                    __typename: 'Checkbox';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    defaultValue?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Country';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Email';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Message';
                    message?: any | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Number';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Select';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                    options?: Array<{
                      __typename?: 'Select_Options';
                      label?: string | null;
                      value?: string | null;
                      id?: string | null;
                    }> | null;
                  }
                | {
                    __typename: 'State';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Text';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
                | {
                    __typename: 'Textarea';
                    name: string;
                    label?: string | null;
                    width?: number | null;
                    required?: boolean | null;
                    id?: string | null;
                    blockName?: string | null;
                    blockType?: string | null;
                  }
              > | null;
              redirect?: {
                __typename?: 'Form_Redirect';
                url?: string | null;
              } | null;
              emails?: Array<{
                __typename?: 'Form_Emails';
                emailTo?: string | null;
                cc?: string | null;
                bcc?: string | null;
                replyTo?: string | null;
                emailFrom?: string | null;
                subject?: string | null;
                message?: any | null;
                id?: string | null;
              }> | null;
            } | null;
            footerBadges?: Array<{
              __typename?: 'AShortformBlock_FooterBadges';
              iconUrl?: string | null;
              text?: string | null;
            }> | null;
          }
        | {
            __typename: 'AThankYouBlock';
            id?: string | null;
            blockName?: string | null;
            blockType?: string | null;
            callButtonText?: string | null;
            subMessage?: string | null;
            phoneNumber?: string | null;
            obligationMessage?: string | null;
            initialTime?: number | null;
            header?: string | null;
            messages?: Array<{
              __typename?: 'AThankYouBlock_Messages';
              action?: string | null;
              status?: string | null;
            }> | null;
            congratsMessageList?: Array<{
              __typename?: 'AThankYouBlock_CongratsMessageList';
              message?: string | null;
            }> | null;
          }
        | { __typename: 'Archive' }
        | { __typename: 'Content' }
        | { __typename: 'MediaBlock' }
      > | null;
    } | null> | null;
  } | null;
};

export type GetSiteByNameQueryVariables = Exact<{
  title: Scalars['String']['input'];
}>;

export type GetSiteByNameQuery = {
  __typename?: 'Query';
  Sites?: {
    __typename?: 'Sites';
    docs?: Array<{
      __typename?: 'Site';
      id?: string | null;
      address?: string | null;
      createdAt?: any | null;
      description?: string | null;
      title: string;
      url?: string | null;
      updatedAt?: any | null;
      faqs?: Array<{
        __typename?: 'Site_Faqs';
        name?: string | null;
        faq?: Array<{
          __typename?: 'Site_Faqs_Faq';
          answer?: string | null;
          id?: string | null;
          question?: string | null;
        }> | null;
      }> | null;
      logo?: {
        __typename?: 'Media';
        id?: string | null;
        alt: string;
        updatedAt?: any | null;
        createdAt?: any | null;
        url?: string | null;
        filename?: string | null;
        mimeType?: string | null;
        filesize?: number | null;
        width?: number | null;
        height?: number | null;
      } | null;
    } | null> | null;
  } | null;
};

export const FormFragmentDoc = `
    fragment Form on Form {
  id
  title
  fields {
    __typename
    ... on Text {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on Textarea {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on Select {
      name
      label
      width
      options {
        label
        value
        id
      }
      required
      id
      blockName
      blockType
    }
    ... on Email {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on State {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on Country {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on Number {
      name
      label
      width
      required
      id
      blockName
      blockType
    }
    ... on Checkbox {
      name
      label
      width
      required
      defaultValue
      id
      blockName
      blockType
    }
    ... on Message {
      message
      id
      blockName
      blockType
    }
  }
  submitButtonLabel
  confirmationType
  confirmationMessage
  redirect {
    url
  }
  emails {
    emailTo
    cc
    bcc
    replyTo
    emailFrom
    subject
    message
    id
  }
  updatedAt
  createdAt
}
    `;
export const AFormBlockFragmentDoc = `
    fragment AFormBlock on AFormBlock {
  form {
    ...Form
  }
  id
  blockName
  blockType
  sectionHeader
  sectionSubheader
  sectionDescription
  formSubheader
  formHeader
  noteContent
  noteTitle
  sectionImage {
    url
    filename
  }
}
    ${FormFragmentDoc}`;
export const ASectionWithImageBlockFragmentDoc = `
    fragment ASectionWithImageBlock on ASectionWithImageBlock {
  title
  description
  backgroundColor
  media {
    url
    id
    filename
  }
  enableLink
  link {
    url
    label
  }
  id
  blockName
  blockType
  direction
}
    `;
export const AFooterBlockFragmentDoc = `
    fragment AFooterBlock on AFooterBlock {
  navItems {
    link {
      label
      url
    }
  }
  id
  blockName
  blockType
}
    `;
export const AHeaderBlockFragmentDoc = `
    fragment AHeaderBlock on AHeaderBlock {
  title
  phoneNumber
  phoneNumberLabel
  companylogo {
    url
    alt
  }
  id
  blockName
  blockType
}
    `;
export const AListSectionBlockFragmentDoc = `
    fragment AListSectionBlock on AListSectionBlock {
  blockType
  sectionFooter
  listItems
  id
  blockName
  link {
    label
    url
  }
  backgroundColor
  enableLink
}
    `;
export const ACallToActionBlockFragmentDoc = `
    fragment ACallToActionBlock on ACallToActionBlock {
  title
  phoneNumber
  clickToCallLabel
  description
  id
  blockName
  blockType
  backgroundColor
}
    `;
export const AConsultationSectionBlockFragmentDoc = `
    fragment AConsultationSectionBlock on AConsultationSectionBlock {
  backgroundImage {
    alt
    url
  }
  blockName
  phoneNumber
  id
  formLink
  blockType
  title
  formLinkLabel
}
    `;
export const APrivacyPolicyBlockFragmentDoc = `
    fragment APrivacyPolicyBlock on APrivacyPolicy {
  privacyPolicy
  id
  blockName
  blockType
}
    `;
export const FormsDocument = `
    query Forms {
  Forms {
    docs {
      title
      fields {
        __typename
      }
    }
  }
}
    `;
export const GetLandingPageLayoutDocument = `
    query GetLandingPageLayout($siteId: String!) {
  LandingPages(where: {site: {equals: $siteId}}, limit: 1) {
    docs {
      layout {
        __typename
        ... on AFormBlock {
          ...AFormBlock
        }
        ... on ASectionWithImageBlock {
          ...ASectionWithImageBlock
        }
        ... on AFooterBlock {
          ...AFooterBlock
        }
        ... on AHeaderBlock {
          ...AHeaderBlock
        }
        ... on AListSectionBlock {
          ...AListSectionBlock
        }
        ... on ACallToActionBlock {
          ...ACallToActionBlock
        }
        ... on AConsultationSectionBlock {
          ...AConsultationSectionBlock
        }
      }
    }
  }
}
    ${AFormBlockFragmentDoc}
${ASectionWithImageBlockFragmentDoc}
${AFooterBlockFragmentDoc}
${AHeaderBlockFragmentDoc}
${AListSectionBlockFragmentDoc}
${ACallToActionBlockFragmentDoc}
${AConsultationSectionBlockFragmentDoc}`;
export const GetPageLayoutDocument = `
    query GetPageLayout($siteId: String!, $slug: String!) {
  Pages(
    where: {AND: [{site: {equals: $siteId}}, {slug: {equals: $slug}}]}
    limit: 1
  ) {
    docs {
      layout {
        __typename
        ... on AShortformBlock {
          attention
          attentionMessage
          sectionHeader
          sectionSubheader
          id
          blockName
          blockType
          sectionHeader
          sectionSubheader
          callUsMessage
          callUsNumber
          form {
            ...Form
          }
          footerBadges {
            iconUrl
            text
          }
        }
        ... on AThankYouBlock {
          messages {
            action
            status
          }
          id
          blockName
          blockType
          congratsMessageList {
            message
          }
          callButtonText
          subMessage
          phoneNumber
          obligationMessage
          initialTime
          header
        }
        ...APrivacyPolicyBlock
      }
    }
  }
}
    ${FormFragmentDoc}
${APrivacyPolicyBlockFragmentDoc}`;
export const GetSiteByNameDocument = `
    query GetSiteByName($title: String!) {
  Sites(where: {title: {equals: $title}}) {
    docs {
      id
      address
      createdAt
      description
      faqs {
        faq {
          answer
          id
          question
        }
        name
      }
      title
      url
      updatedAt
      logo {
        id
        alt
        updatedAt
        createdAt
        url
        filename
        mimeType
        filesize
        width
        height
      }
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    Forms: build.query<FormsQuery, FormsQueryVariables | void>({
      query: (variables) => ({ document: FormsDocument, variables }),
    }),
    GetLandingPageLayout: build.query<
      GetLandingPageLayoutQuery,
      GetLandingPageLayoutQueryVariables
    >({
      query: (variables) => ({
        document: GetLandingPageLayoutDocument,
        variables,
      }),
    }),
    GetPageLayout: build.query<GetPageLayoutQuery, GetPageLayoutQueryVariables>(
      {
        query: (variables) => ({ document: GetPageLayoutDocument, variables }),
      }
    ),
    GetSiteByName: build.query<GetSiteByNameQuery, GetSiteByNameQueryVariables>(
      {
        query: (variables) => ({ document: GetSiteByNameDocument, variables }),
      }
    ),
  }),
});

export { injectedRtkApi as api };
export const {
  useFormsQuery,
  useLazyFormsQuery,
  useGetLandingPageLayoutQuery,
  useLazyGetLandingPageLayoutQuery,
  useGetPageLayoutQuery,
  useLazyGetPageLayoutQuery,
  useGetSiteByNameQuery,
  useLazyGetSiteByNameQuery,
} = injectedRtkApi;
