-- Project Name : ESM-GCP-STUDY
-- Date/Time    : 2022/09/12 20:00:42
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

-- web_counter_takmita
--* RestoreFromTempTable
create table web_counter_takmita (
  counter INT not null comment 'counter:更新用カウンター'
) comment 'web_counter_takmita' ;

create unique index web_counter_takmita_PKI
  on web_counter_takmita(counter);

alter table web_counter_takmita
  add constraint web_counter_takmita_PKC primary key (counter);
