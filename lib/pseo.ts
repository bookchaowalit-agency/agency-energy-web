export type PseoService = Readonly<{
  kind: 'service';
  slug: string;
  name: string;
  title: string;
  description: string;
  intent: string;
  buyer: string;
  context: string;
  workflow: readonly string[];
  deliverables: readonly string[];
  evidence: readonly string[];
  readiness: string;
  agencySlug: string;
  agencyName: string;
  agencyThaiName: string;
  agencyStatus: 'incubating' | 'target' | 'locked';
  agencyStage: string;
}>;

export const pseoService: PseoService = {
  "kind": "service",
  "slug": "energy-project-development-map",
  "name": "Energy project development map (future)",
  "title": "Energy Project Development Map สำหรับโครงการพลังงาน",
  "description": "วาง project, permit, grid, financing และ operating evidence boundary ก่อนพัฒนา asset",
  "intent": "ต้องการเห็น economics, permit, grid และ operating risk ของโครงการพลังงานก่อนใช้ทุน",
  "buyer": "Energy developer, industrial owner และ infrastructure investor",
  "context": "เป็น future capability สำหรับ project map ไม่ใช่ผู้ผลิตพลังงาน ผู้รับประกัน economics หรือผู้ให้คำแนะนำการลงทุน",
  "workflow": [
    "กำหนด project, geography และ decision gate",
    "ทำ map ของ permit, grid, capital และ operating dependency",
    "แยก evidence จริงจาก assumption และ missing diligence",
    "ส่ง development map ให้ project sponsor และ qualified partner"
  ],
  "deliverables": [
    "project development boundary",
    "permit/grid/capital dependency map",
    "risk and evidence register",
    "next-stage diligence plan"
  ],
  "evidence": [
    "ไม่อ้าง permit, capacity, PPA, IRR หรือ project pipeline ที่ยังไม่มีหลักฐาน",
    "ไม่เปิดเผยโครงการหรือข้อมูลที่เป็นความลับใน public content",
    "engineering, legal และ financing ต้องผ่าน partner ที่เหมาะสม"
  ],
  "readiness": "ต้องมี energy lead, regulatory/engineering reviewer, project evidence และ permit boundary ก่อนเปิด inquiry",
  "agencySlug": "energy",
  "agencyName": "Energy",
  "agencyThaiName": "พลังงาน",
  "agencyStatus": "locked",
  "agencyStage": "P3"
};
