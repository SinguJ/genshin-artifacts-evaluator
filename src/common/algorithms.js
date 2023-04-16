import { weights } from "@/stores/data";
import Characters from "@/stores/characters";

const weightIndexes = [
    'hp', 'hpPercentage', 'atk', 'atkPercentage', 'def', 'defPercentage',
    'critRatePercentage', 'critDmgPercentage', 'elementalMastery', 'energyRechargePercentage',
    'amenoElementalDmgBonusPercentage', 'cryoElementalDmgBonusPercentage', 'dendroElementalDmgBonusPercentage',
    'electroElementalDmgBonusPercentage', 'geoElementalDmgBonusPercentage', 'hydroElementalDmgBonusPercentage',
    'pyroElementalDmgBonusPercentage', 'physicalDmgBonusPercentage', 'healingBonusPercentage'
]

function calculateCharacterScore (artifact, weight) {
    let score = 0;
    for (let state of ['mainStat', 'subStat1', 'subStat2', 'subStat3', 'subStat4']) {
        let index = weightIndexes.indexOf(artifact[state])
        if (index === -1) {
            continue
        }
        score += weight[index]
    }
    return score / 5
}

export function getSuitableCharacters (artifact) {
    let characterScoreSet = []
    for (let characterName in weights) {
        characterScoreSet.push({
            character: Characters[characterName],
            score: calculateCharacterScore(artifact, weights[characterName])
        })
    }
    characterScoreSet.sort((a, b) => b.score - a.score)
    return characterScoreSet
}