import { defaultTheme } from "../../../ReactSpreadsheetImport"
import { MatchColumnsStep } from "../MatchColumnsStep"
import { Providers } from "../../../components/Providers"
import { mockRsiValues } from "../../../stories/mockRsiValues"
import { ModalWrapper } from "../../../components/ModalWrapper"

export default {
  title: "Match Columns Steps",
  parameters: {
    layout: "fullscreen",
  },
}

const mockData = [
  ["id", "first_name", "last_name", "email", "gender", "ip_address"],
  ["2", "Craig", "Smith", "cdickie7@virginia.edu", "Male", "143.248.220.47"],
  ["3", "Jolene", "Darlington", "jdarlington6@jalbum.net", "Female", "172.14.232.84"],
  ["4", "Tersina", "Isacke", "tisacke2@edublogs.org", "Non-binary", "237.69.180.31"],
  ["5", "Yoko", "Guilliland", "yguilliland3@elegantthemes.com", "Female", "179.123.237.119"],
  ["6", "Freida", "Fearns", "ffearns4@fotki.com", "Male", "184.48.15.1"],
  ["7", "Mildrid", "Mount", "mmount5@last.fm", "Male", "26.97.160.103"],
  ["8", "Geno", "Gencke", "ggencke0@tinypic.com", "Female", "17.204.180.40"],
  ["9", "Bertram", "Conhall", "btwyford1@seattletimes.com", "Genderqueer", "188.98.2.13"],
  ["10", "Jere", "Shier", "jshier8@comcast.net", "Agender", "10.143.62.161"],
]

export const Basic = () => (
  <Providers theme={defaultTheme} rsiValues={mockRsiValues}>
    <ModalWrapper isOpen={true} onClose={() => {}}>
      <MatchColumnsStep headerValues={mockData[0] as string[]} data={mockData.slice(1)} onContinue={() => {}} />
    </ModalWrapper>
  </Providers>
)
