import { db } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
	request: NextRequest,
): Promise<NextResponse<{ link: string | null }>> {
	const searchParams = request.nextUrl.searchParams;

	const code = searchParams.get('code');

	if (!code) return NextResponse.json({ link: null });

	try {
		const link = await db.link.findUnique({ where: { code } });

		if (link) {
			await db.link.update({
				data: {
					views: link.views + 1,
				},
				where: {
					id: link.id,
				},
			});
			return NextResponse.json({ link: link.url });
		}

		return NextResponse.json({ link: null });
	} catch {
		return NextResponse.json({ link: null });
	}
}
