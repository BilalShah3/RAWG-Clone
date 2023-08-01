import { Button, Text } from "@chakra-ui/react"
import { useState } from "react"

interface ExpandableTextProps {
    children: string
    limit: number
}
const ExpandableText = ({children, limit}: ExpandableTextProps) => {
    const [expended, setExpended] = useState(false)
    if(!children) return null
    if(children.length <= limit) {
        return <Text>{children}</Text>
    }
    const summurizeText = expended ? children : children.slice(0, limit) + "..."
  return (
    <Text>
        {summurizeText}{''}
        <Button marginLeft={1} colorScheme="yellow" size='xs' fontWeight='bold' onClick={() => setExpended(!expended)}>
            {expended ? "Show Less" : "Show More"}
        </Button>
    </Text>
  )
}

export default ExpandableText