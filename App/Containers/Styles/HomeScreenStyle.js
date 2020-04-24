import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'
import { apply, family, colors } from 'osmicsx'

export default StyleSheet.create({
  container: apply([
    "flex",
    "bg-gray-800"
  ]),
  summaryContainer: apply([
    "flex",
    "row",
    "justify-center",
    "items-center",
    "p-5"
  ]),
  welcomeText: apply([
    "text-white",
    "text-2xl",
    "flex-wrap",
    "leading-8",
    family(Fonts.type.medium)
  ])
})
