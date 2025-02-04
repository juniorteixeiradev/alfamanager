import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CldUploadWidget } from 'next-cloudinary';
import { HiOutlinePencilSquare } from 'react-icons/hi2';
export default function DropDownEditImage({ ...props }) {
  return (
    <CldUploadWidget uploadPreset="lesamis">
      {({ open, widget, results }) => {
        results = {
            event: 'onSuccess',
            info: 'Subiu com sucesso'
        }
        return (
          <DropdownMenu>
            <DropdownMenuTrigger>
              <HiOutlinePencilSquare size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Upload de imagens</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" text-blue-700" onClick={() => open()}>
                Editar
              </DropdownMenuItem>
              <DropdownMenuItem className=" text-red-600">
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      }}
    </CldUploadWidget>
  );
}
