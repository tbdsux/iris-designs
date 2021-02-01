import { Project } from './portfolio/portfolio'

// import all projects
import { set } from './portfolio/set'
import { logos } from './portfolio/logo'
import { banners } from './portfolio/banner'
import { brochures } from './portfolio/brochure'
import { business_cards } from './portfolio/business_card'
import { packages } from './portfolio/package'
import { res_menus } from './portfolio/res_menu'
import { websites } from './portfolio/website'
import { app_uis } from './portfolio/app_ui'

// initialize array
let projects: Project[] = []

// append all
projects = projects
  .concat(
    set,
    logos,
    banners,
    brochures,
    business_cards,
    packages,
    res_menus,
    websites,
    app_uis,
  )
  .map((proj) => {
    proj.slug = proj.name.replace(' ', '-').replace("'", '').toLowerCase()
    return proj
  })

// return projects
export { projects }
