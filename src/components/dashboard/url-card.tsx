import { Card } from '@/components/ui/dashboard/card';
import { Link } from '@/lib/types';
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

type CardProps = {} & Link;

export function UrlCard({ id, views, createdAt, name, code, url }: CardProps) {
	const formattedName = name || new URL(url).hostname;
	const { showModal, toggleState } = useModal();
	const { removeLink } = useLinks();

	const element = document.querySelector('#add-url-modal');
	if (!element) return;

	const handleDelete = () => {
		removeLink({ id });
		deleteUrl(id);
	};

	const handleEdit = () => {
		toggleState();
	};

	const relative = relativeTime(createdAt);

	return (
		<>
			{showModal &&
				createPortal(
					<EditUrlModal id={id} name={name} url={url} code={code} />,
					element,
				)}
			<Card>
				<Card.Image />
				<div className='w-full'>
					<Card.Header>
						{formattedName}
						<h2 className='font-normal text-sm text-neutral-400'>
							{relative === 'ago' ? 'Now' : relative}
						</h2>
					</Card.Header>
					<Card.Content>{`capyshort.dev/${code}`}</Card.Content>
				</div>
				<div className='flex w-min gap-x-5 items-center text-center'>
					<Card.Views content={views} />
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Card.Button>
								<Settings size='20' />
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
