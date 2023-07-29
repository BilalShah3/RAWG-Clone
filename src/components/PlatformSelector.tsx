import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms, { Platform } from "../hooks/usePlatforms"

interface PlatformSelectorProps {
  onSelectPlatform: (platform: Platform) => void
  selectedPlatformId?: number
}
const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: PlatformSelectorProps) => {
  const { data:platforms, error } = usePlatforms()
  const selectedPlatform = platforms?.results.find(p=>p.id === selectedPlatformId)
  if (error) return null

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map(platform => 
          <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>)}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector