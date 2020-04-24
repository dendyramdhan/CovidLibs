import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes'
import { apply, family, colors } from 'osmicsx'

export default StyleSheet.create({
    container: apply([
        "bg-gray-900",
        "flex",
        "row",
        "items-center",
        "mb-4",
        "p-5",
        "rounded-lg"
    ]),
    cardLabel: apply([
        "text-white",
        "text-base",
        "mb-1",
        family(Fonts.type.medium)
    ]),
    countLabel: apply([
        "text-white",
        "text-5xl",
        family(Fonts.type.bold)
    ])
})