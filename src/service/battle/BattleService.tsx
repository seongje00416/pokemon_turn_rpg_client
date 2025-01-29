import '@/service/battle/skill/SkillService'
import '@/service/battle/status/StatusService'

import { PokemonDetail } from "@/service/data/PokemonBattleData.ts";

// ---------- 배틀 흐름 함수 ---------- //
// 배틀 시작시 실행되는 함수
export const BattleStart = () => {
    
}
// 배틀 종료시 실행되는 함수
export const BattleEnd = () => {

}
// 배틀 정보 디스플레이를 제어하는 함수
export const BattleInformationDisplayController = () => {

}
// 1턴의 흐름을 제어하는 함수
export const TurnController = ( current: PokemonDetail ) => {
    // 턴 시작시 장비 효과 발동

    // 턴 시작시 상태 이상 효과 발동

    // 턴 시작시 스킬 효과 발동
    
    // 스킬 선택
    
    // 대상 선택
    
    // 스킬 효과 발동

    // 턴 종료시 장비 효과 발동

    // 턴 종료시 상태 이상 효과 발동

    // 턴 종료시 스킬 효과 발동
}
// 행동 게이지 디스플레이를 제어하는 함수
export const MoveGageDisplayController = () => {

}
// ---------- 장비 효과를 적용하는 함수 ---------- //
export const HoldItemAbilitySetting = () => {

}

// ---------- 스킬 사용 시 작동하는 효과 함수 ---------- //
// 스킬을 사용하는 함수
export const UseSkillController = () => {

}
// 상태 이상을 부여하는 함수
export const GiveStatusController = () => {

}
// 행동 게이지를 제어하는 함수
export const MoveGageController = () => {

}
// HP를 제어하는 함수
export const HPController = () => {

}

// ---------- 컨텍스트를 제어하는 함수 ---------- //
// 가이드 컨텍스트를 제어하는 함수
export const GuideContextController = ( description: string ) => {

}
// 배틀 컨텍스트를 제어하는 함수
export const BattleContextController = ( description: string ) => {

}