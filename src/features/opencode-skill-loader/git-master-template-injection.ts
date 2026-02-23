import type { GitMasterConfig } from "../../config/schema"

export function injectGitMasterConfig(template: string, _config?: GitMasterConfig): string {
	// No-op: removed automatic Sisyphus co-author/footer injection into commits
	return template
}
