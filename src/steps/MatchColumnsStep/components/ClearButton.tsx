import { Button } from "@chakra-ui/react"
import { RxCross2 } from "react-icons/rx"

type ClearButtonProps = {
  onClear: () => void
}

export const ClearButton = (props: ClearButtonProps) => {
  const { onClear } = props

  return (
    <Button
      variant="ghost"
      size="sm"
      opacity={0.75}
      color="red"
      paddingInline={1}
      minWidth={6}
      colorScheme="red"
      ml={1}
      onClick={onClear}
    >
      <RxCross2 />
    </Button>
  )
}
