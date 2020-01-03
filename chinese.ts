import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
		constructor(
			public http: Http,
			public rs: ResourceService,
			private _router: Router,
			private showtoasterService: ShowtoasterService,
			private globalValService: GlobalValService
		) {
			//token, 如果cookie存在, 则
			if (this.authInitialState.token !== ''){
				this.getUserInfo()
			}else{
				this.userSubject.next(this.authInitialState.user)
			}
			this.getSnsLogins()
		}
    
		updateUser(data:Object):void{
			this.rs.mdUser(data).subscribe((res:Response)=>{
				this.userSubject.next(res.json().data)
				let toasterInfo = new ToasterModel({
					content:'更新用户成功.',
					type: 'success'
				})
				this.showtoasterService.showToaster(toasterInfo)
			},(err:any)=>{
				let toasterInfo = new ToasterModel({
					content: err.json().error_msg || '更新用户资料失败',
					type: 'error'
				})
				this.showtoasterService.showToaster(toasterInfo)
			})
		}


}
