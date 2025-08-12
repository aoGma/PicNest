import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ description: '用户ID' })
  id: string;

  @ApiProperty({ description: '用户名' })
  username: string;

  @ApiProperty({ description: '邮箱地址' })
  email: string;

  @ApiProperty({ description: '头像URL' })
  avatar?: string;

  @ApiProperty({ description: '创建时间' })
  createdAt: Date;

  @ApiProperty({ description: '更新时间' })
  updatedAt: Date;
}

export class AuthResponseDto {
  @ApiProperty({ description: 'JWT访问令牌' })
  accessToken: string;

  @ApiProperty({ description: '用户信息' })
  user: UserDto;
}
