import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { BlogService } from './blog.service';

@ApiTags('Blog Client')
@Controller('/client/blog')
export class BlogController {
    constructor(
        private readonly blogService: BlogService
    ){}

    @ApiOperation({
        summary: "Take all blog of client"
    })
    @ApiCreatedResponse({
        description: "Fetch all blog successfully"
    })
    @ApiBadRequestResponse({
        description: "Invalid data provided"
    })
    @Get('/:clientId')
    async getAllBlog(@Req() req: Request, @Res() res: Response) {
        
    }
}
