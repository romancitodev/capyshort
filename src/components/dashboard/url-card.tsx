import { Card } from '@/components/ui/dashboard/card';
import { Edit2, Settings, Trash2 } from 'lucide-react';
import { relativeTime } from 'human-date';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLinks } from '@/store/links';
import { deleteUrl } from '@/actions/delete-url';
import { useModal } from '@/store/edit-modal';
import { createPortal } from 'react-dom';
import { EditUrlModal } from './edit-modal';
import { Link } from '@prisma/client';

type CardProps = {} & Link;

export function UrlCard({ id, views, createdAt, name, code, url }: CardProps) {
	const formattedName = name || new URL(url).hostname;
	const { showModal, toggleState, id: modalId } = useModal();
	const { removeLink } = useLinks();

	const element = document.querySelector('#add-url-modal');
	if (!element) return;

	const handleDelete = () => {
		removeLink({ id });
		deleteUrl(id);
	};

	const handleEdit = () => {
		toggleState(id);
	};

	const relative = relativeTime(createdAt);

	return (
		<>
			{showModal &&
				modalId === id &&
				createPortal(
					<EditUrlModal id={id} name={name} url={url} code={code} />,
					element,
				)}
			<Card>
				<Card.Image />
				<div className='w-full'>
					<Card.Header>
						{formattedName}
						<h2 className='font-normal text-sm text-violet-100/60'>
							{relative === 'ago' ? 'Now' : relative}
						</h2>
					</Card.Header>
					<Card.Content>{`capyshort.dev/${code}`}</Card.Content>
				</div>
				<div className='flex w-full h-full gap-x-5 justify-between items-center text-center sm:w-max sm:h-max sm:justify-normal'>
					<Card.Views content={views} />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Card.Button className='p-0 bg-primary/30 ring-0 border border-primary/50 w-[35px] h-[35px]'>
								<Settings size='16' />
							</Card.Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-min'>
							<DropdownMenuGroup className='grid gap-y-1'>
								<DropdownMenuItem onClick={handleEdit}>
									<Edit2 className='mr-2 h-4 w-4' />
									Edit
								</DropdownMenuItem>
								<DropdownMenuItem
									className='text-red-500/90 focus:bg-red-600/15 focus:text-red-600'
									onClick={handleDelete}
								>
									<Trash2 className='mr-2 h-4 w-4' />
									Delete
								</DropdownMenuItem>
							</DropdownMenuGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</Card>
		</>
	);
}
