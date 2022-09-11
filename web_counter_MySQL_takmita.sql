-- Project Name : ESM-GCP-STUDY
-- Date/Time    : 2022/09/11 12:59:22
-- Author       : mitamurat
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

/*
  << 注意！！ >>
  BackupToTempTable, RestoreFromTempTable疑似命令が付加されています。
  これにより、drop table, create table 後もデータが残ります。
  この機能は一時的に $$TableName のような一時テーブルを作成します。
  この機能は A5:SQL Mk-2でのみ有効であることに注意してください。
*/

-- 
--* RestoreFromTempTable
create table NEW_ENTITY1 (
  counter INT not null comment 'counter:更新用カウンター'
) ;

create unique index NEW_ENTITY1_PKI
  on NEW_ENTITY1(counter);

alter table NEW_ENTITY1
  add constraint NEW_ENTITY1_PKC primary key (counter);
