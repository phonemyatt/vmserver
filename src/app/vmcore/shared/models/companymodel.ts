export class CompanyModel {
    constructor(public name: String,
                public desc: String,
                public remark: String,
                public img: String,
                public email?: String,
                public hp?: String,
                public website?: String,
                public google?: String,
                public facebook?: String) {}
}