import * as core from "express-serve-static-core";
import { Request } from "express";
export interface UITheme {
  mode: "dark" | "light";
  primaryColor: string;
  secondaryColor: string;
}
export interface SocketEvent {
  action: "created" | "updated" | "deleted" | "async";
  id: number;
  message?: {
    projectId?: number;
    teamId?: number;
    type?: string;
  };
}
export interface MessageSystem {
  message: string;
  type: "success" | "info" | "warning" | "error";
  delay?: number;
}

export type StatusFlag = "init" | "active" | "deleted";
export interface ServiceRequest<
  P = core.ParamsDictionary,
  ResBody = any,
  ReqBody = any,
  ReqQuery = core.Query,
  Locals extends Record<string, any> = Record<string, any>
> extends Request<P, ResBody, ReqBody, ReqQuery, Locals> {
  loginInfo?: TokenInfo;
}

export interface TokenInfo {
  id: number;
  name: string;
  code: string;
  teamId: number;
  primary: boolean;
  scopes: string[];
}
export interface Team {
  id: number;
  ownerId: number;
  name: string;
  desc: string;
  bg: string;
  avatar?: string;
  memo?: string;
  status: StatusFlag;
}
export interface TeamAssign {
  id: number;
  teamId: number;
  userId: number;
}

export interface User {
  id: number;
  localAccountId?: string;
  code: string;
  supplierId?: number;
  name: string;
  kana: string;
  email: string;
  phone?: string;
  avatar?: string;
  theme: string;
  status: StatusFlag;
  hireDate: number;
  retirementDate?: number;
}
export interface UserPermission {
  id: number;
  userId: number;
  permissionId: number;
}
export interface Permission {
  id: number;
  value: string;
}
export interface Salary {
  id: number;
  userId: number;
  date: number;
  pay: number;
}
export interface Notice {
  id: number;
  title: string;
  important: boolean;
  message: string;
  start: number;
  end: number;
}
export interface UserChat {
  id: number;
  userId: number;
  messageId: number;
}
export interface Message {
  id: number;
  from: number;
  dateSend: number;
  dateRead: number;
  content: string;
}

export type GeneralNoticeType = "info" | "warning" | "important";
export interface GeneralNotice {
  id: number;
  title: string;
  message: string;
  type: GeneralNoticeType;
  start: number;
  end: number;
  status: StatusFlag;
}

export interface Supplier {
  id: number;
  code: string;
  name: string;
  phoneNumber?: string;
  email?: string;
  status: StatusFlag;
  memo?: string;
}

export interface SupplierMember {
  id: number;
  supplierId: number;
  name: string;
  kana: string;
  phoneNumber?: string;
  email: string;
  memo?: string;
}

export type ProjectStatus = "受注前" | "実施中" | "完了";
export interface Project {
  id: number;
  code: string;
  supplierId: number;
  supplierAdminId: number;
  teamId: number;
  leader: number;
  name: string;
  scheduledStart: number;
  scheduledEnd: number;
  scheduledIncome: number;
  status: ProjectStatus;
  memo?: string;
}
export interface Assign {
  id: number;
  projectId: number;
  userId: number;
}
export interface Income {
  id: number;
  subCode: string;
  projectId: number;
  start: number;
  end: number;
  fee: number;
  average: number;
  memo?: string;
}
export type ApplyStatus = "init" | "accepted" | "rejected";
export interface Cost {
  id: number;
  projectId: number;
  userId: number;
  content: string;
  pay: number;
  date: number;
  status: ApplyStatus;
  memo?: string;
}
export interface Working {
  id: number;
  projectId: number;
  userId: number;
  date: number;
  salary: number;
  time: number;
  total: number;
  status: ApplyStatus;
  memo?: string;
}
