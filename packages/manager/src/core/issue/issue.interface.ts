import type { FindOperator } from 'typeorm';

import type { OhbugEventLike } from '@ohbug-server/common';

import type { MetaData } from '@/core/event/event.interface';
import { Issue } from '@/core/issue/issue.entity';

export interface CreateOrUpdateIssueByIntroParams {
  event: OhbugEventLike;
  baseIssue?: Issue;
  intro?: string;
  metadata?: MetaData;
  document_id?: string;
  index?: string;
}

export interface GetIssueByIssueIdParams {
  issue_id: number | string;
}

export interface SearchCondition {
  start?: Date;
  end?: Date;
}

export interface GetIssuesByProjectIdParams {
  apiKey: string;
  searchCondition: SearchCondition;
  limit?: number;
  skip?: number;
}

export interface GetTrendByIssueIdParams {
  ids: number[];
  period: '24h' | '14d' | 'all';
}

export interface GetProjectTrendByApiKeyParams {
  apiKey: string;
  start: Date;
  end: Date;
}

export interface WhereOptions {
  updatedAt?: FindOperator<number | string>;
}
