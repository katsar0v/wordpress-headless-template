import {WP_Post, WP_Page} from './types'

export namespace WP_API {

    const api_url_prefix: string = '/wp-json/wp/v2';

    export function get_posts(): Promise<WP_Post[]> {
        let url = api_url_prefix + '/posts';
        return new Promise<WP_Post[]>((resolve, reject) => {
            fetch(url)
            .then((response: Response) => {
                if(response.ok) {
                    resolve(response.json())
                }
            })
            .catch(_ => reject(_))
        });
    }

    export function get_pages(): Promise<WP_Page[]> {
        let url = api_url_prefix + '/pages';
        return new Promise<WP_Post[]>((resolve, reject) => {
            fetch(url)
            .then((response: Response) => {
                if(response.ok) {
                    resolve(response.json())
                }
            })
            .catch(_ => reject(_))
        });
    }
}
