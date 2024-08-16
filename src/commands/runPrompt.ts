import * as vscode from 'vscode';
import { getProviders } from '../utils/providerUtils';
import { executePromptWithProviderAndModel } from '../utils/executePrompt';

export function runPrompt() {
  return vscode.commands.registerCommand('prompt-runner.runPrompt', async () => {
    const config = vscode.workspace.getConfiguration('prompt-runner');
    const providers = getProviders(config);
    const defaultProvider = config.get('defaultProvider') as string;
    const defaultModel = config.get('defaultModel') as string;

    await executePromptWithProviderAndModel(providers, defaultProvider, defaultModel);
  });
}
