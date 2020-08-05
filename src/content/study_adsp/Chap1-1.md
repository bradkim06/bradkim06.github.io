---
layout: post
title: 'Chap1-1. 데이터의 이해'
author: [bradkim06]
tags: ['study ADSP']
date: '2020-08-01'
draft: false
---
The category summarizes the study for `ADsP`(Advanced Data Analytics Semi-Professional) National Technical Certificate personally.

**`학습 목표`**
====
- 데이터 정의에 대해 이해한다.
- 데이터베이스의 정의와 특징을 이해한다.
- 데이터베이스 활용에 대해 이해한다.

**1절. 데이터와 정보**
==================

데이터의 유형
---

| 구분                                  | 형태          | 특징                              |
| **정성적 데이터(qualitative data)**     | 언어,문자 등  | 저장,검색,분석에 **많은** 비용 소모   |
| **정량적 데이터(quantitative data)**    | 수치,도형,기호 등 | `정형화가 된 데이터`로 비용 소모가 **적음**|

지식경영의 핵심 이슈
---
- **암묵지**: 개인의 `내면화(internalization)`된 지식 -> 조직의 지식으로 `공통화(socialization)`
- **형식지**: 언어,기호,숫자로 `표출화(externalization)`된 지식 -> 개인의 지식으로 `연결화(combiation)`

데이터와 정보의 관계
---
1. **데이터(Data)**: 개별 데이터 자체로는 의미가 중요하지 않은 `객관적인 사실`
2. **정보(Information)**: 데이터의 가공, 처리와 데이터간 연간관계 속에서 `의미`가 도출된 것.
3. **지식(Knowledge)**: 유의미한 정보를 분류하고 개인적인 경험을 결합시켜 `고유의 지식`으로 내재화된 것.
4. **지혜(Wisdom)**: 지식의 축적과 아이디어가 결합된 `창의적인 산물`

**3절. 데이터베이스의 활용**
===

기업내부 데이터베이스
---
- **OLTP(On-Line Transaction Processing)**: 데이터 `갱신` 위주
- **OLAP(On-Line Analytical Processing)**: 비지니스 관점에서 데이터 `조회` 위주

2000년대 기업 데이터베이스
---
**CRM(Customer Relationship Management)**: 기업이 고객과 관련된 내외부 자료를 분석,통합해 `고객 중심 자원`을 극대화.

**SCM(Supply Chain Management)**: 외부 업체, 고객 등 거래관계에 있는 기업들간 IT를 이용한 `공급망 최적화`

분야별 데이터베이스
---
### 제조 부문
ERP -> CRM, Client/Server -> Web Database
- **ERP(Enterprise Resource Planning)**: 경영자원(인사,재무,생산 등)을 하나의 통합 시스템으로 재구축.
- **BI(Business Intelligence)**: 데이터를 정리하고 분석해 `기업의 의사결정`에 활용하는 프로세스.
- **CRM(Customer Relationship Management)**: 기업이 고객과 관련된 내외부 자료를 분석,통합해 `고객 중심 자원`을 극대화.
- **RTE(Real-Time Enterprise)**: 회사 전 부문의 정보를 하나로 통합

### 금융 부문
DB 활용 마케팅
- **EAI(Enterprise Application Intergration)**: 정보를 중앙 집중적으로 통합,관리 사용.
- **EDW(Enterprise Data Warehouse)**: 기존 DW(Data Warehouse)를 확장한 모델.

### 유통 부문
- **KMS(Knowledge Management System)**: 기업 경영이 생산,제조에서 `지식`의 관점으로 새롭게 조명.
- **RFID**: 주파수를 이용해 ID를 식별하는 SYSTEM.

### 사회기반 부문
- **EDI(Electronic Data Interchange)**: 주문서,납품서,청구서 등 무역에 필요한 각종 서류를 표준화된 양식으로 전자적 신호로 바꿔 거래처에 전송하는 시스템.
